from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from PIL import Image
import io

app = Flask(__name__)
CORS(app)

# Disease class mapping
DISEASE_CLASSES = {
    0: "Apple - Apple Scab",
    1: "Apple - Black Rot",
    2: "Apple - Cedar Apple Rust",
    3: "Apple - Healthy",
    4: "Blueberry - Healthy",
    5: "Cherry - Powdery Mildew",
    6: "Cherry - Healthy",
    7: "Corn (Maize) - Gray Leaf Spot",
    8: "Corn (Maize) - Common Rust",
    9: "Corn (Maize) - Northern Leaf Blight",
    10: "Corn (Maize) - Healthy",
    11: "Grape - Black Rot",
    12: "Grape - Esca (Black Measles)",
    13: "Grape - Leaf Blight (Isariopsis)",
    14: "Grape - Healthy",
    15: "Orange - Haunglongbing (Citrus Greening)",
    16: "Peach - Bacterial Spot",
    17: "Peach - Healthy",
    18: "Pepper Bell - Bacterial Spot",
    19: "Pepper Bell - Healthy",
    20: "Potato - Early Blight",
    21: "Potato - Late Blight",
    22: "Potato - Healthy",
    23: "Raspberry - Healthy",
    24: "Soybean - Healthy",
    25: "Squash - Powdery Mildew",
    26: "Strawberry - Leaf Scorch",
    27: "Strawberry - Healthy",
    28: "Tomato - Bacterial Spot",
    29: "Tomato - Early Blight",
    30: "Tomato - Late Blight",
    31: "Tomato - Leaf Mold",
    32: "Tomato - Septoria Leaf Spot",
    33: "Tomato - Spider Mites",
    34: "Tomato - Target Spot",
    35: "Tomato - Yellow Leaf Curl Virus",
    36: "Tomato - Mosaic Virus",
    37: "Tomato - Healthy"
}

# Load the model
try:
    model = tf.keras.models.load_model("trained_model.h5")
    print("Model loaded successfully!")
except Exception as e:
    print(f"Error loading model: {e}")
    model = None

def preprocess_image(image):
    # Resize image to 128x128
    image = image.resize((128, 128))
    # Convert to array and normalize
    img_array = tf.keras.preprocessing.image.img_to_array(image)
    img_array = np.array([img_array]) / 255.0  # normalize to [0,1]
    return img_array

@app.route('/predict', methods=['POST'])
def predict():
    try:
        if model is None:
            return jsonify({'error': 'Model not loaded'}), 500

        # Get the image from the request
        if 'file' not in request.files:
            return jsonify({'error': 'No file uploaded'}), 400
            
        file = request.files['file']
        if file.filename == '':
            return jsonify({'error': 'No file selected'}), 400
            
        # Read and process the image
        image = Image.open(io.BytesIO(file.read()))
        
        # Preprocess the image
        processed_image = preprocess_image(image)
        
        # Make prediction
        predictions = model.predict(processed_image)
        prediction_idx = np.argmax(predictions[0])
        
        # Get confidence score
        confidence = float(predictions[0][prediction_idx])
        
        # Get disease name
        disease_name = DISEASE_CLASSES.get(prediction_idx, "Unknown Disease")
        
        return jsonify({
            'class': disease_name,
            'confidence': confidence,
            'index': int(prediction_idx)
        })
    
    except Exception as e:
        print(f"Error during prediction: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True) 