# Agrivision - Plant Disease Detection System

Agrivision is an AI-powered plant disease detection system that helps farmers and gardeners identify plant diseases early and provides treatment recommendations. The system uses deep learning and computer vision to analyze plant images and detect various diseases.

## Features

- 🔍 Real-time plant disease detection
- 📱 Responsive web interface
- 🌱 Support for multiple plant types
- 💊 Detailed treatment recommendations
- 📊 Confidence score for predictions
- 🎯 Immediate action suggestions
- 🛡️ Preventive measures
- 🌿 Cultural practice recommendations

## Supported Plants and Diseases

- **Apple**
  - Apple Scab
  - Black Rot
  - Cedar Apple Rust

- **Corn**
  - Cercospora Leaf Spot
  - Common Rust
  - Northern Leaf Blight

- **Potato**
  - Early Blight
  - Late Blight

- **Tomato**
  - Early Blight
  - Late Blight
  - Leaf Mold
  - Septoria Leaf Spot

- **Grape**
  - Black Rot
  - Esca
  - Leaf Blight

- **Strawberry**
  - Leaf Scorch

- **Peach**
  - Bacterial Spot

- **Cherry**
  - Powdery Mildew

## Tech Stack

- **Frontend**: React.js with Vite
- **Backend**: Flask (Python)
- **AI/ML**: TensorFlow, Keras
- **UI Framework**: Material-UI
- **Image Processing**: OpenCV

## Prerequisites

- Python 3.8 or higher
- Node.js 14.0 or higher
- npm 6.0 or higher
- Virtual environment (recommended)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/agrivision.git
cd agrivision
```

2. Set up the Python virtual environment and install dependencies:
```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt
```

3. Install frontend dependencies:
```bash
cd plant-disease-app-vite
npm install
```

4. Download the trained model:
- Download the `trained_model.h5` file from the releases section
- Place it in the root directory of the project

## Running the Application

1. Start the Flask backend server:
```bash
# Make sure you're in the root directory
# Activate virtual environment if not already activated
python server.py
```

2. Start the Vite development server:
```bash
# Open a new terminal
cd plant-disease-app-vite
npm run dev
```

3. Access the application:
- Open your web browser
- Navigate to `http://localhost:5173`

## Project Structure

```
agrivision/
├── plant-disease-app-vite/    # Frontend React application
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── App.jsx          # Main App component
│   │   └── main.jsx         # Entry point
│   └── package.json         # Frontend dependencies
├── server.py                 # Flask backend server
├── trained_model.h5          # Trained TensorFlow model
├── requirements.txt          # Python dependencies
└── README.md                 # Project documentation
```

## API Endpoints

- `POST /predict`: Accepts image file and returns disease prediction
  - Request: Form data with key 'file' containing the image
  - Response: JSON with disease class and confidence score

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Dataset: [PlantVillage Dataset](https://www.kaggle.com/datasets/emmarex/plantdisease)
- Model Architecture: Custom CNN based on research papers
- UI Design: Material-UI components and custom styling

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/agrivision](https://github.com/yourusername/agrivision) 