import streamlit as st
import numpy as np
from PIL import Image
import time

# Set page config
st.set_page_config(
    page_title="Skin Cancer Detection",
    page_icon="🔬",
    layout="wide"
)

# Custom CSS
st.markdown("""
    <style>
    .main {
        padding: 0rem 1rem;
    }
    .stAlert {
        padding: 1rem;
        margin-bottom: 1rem;
    }
    .upload-text {
        text-align: center;
        padding: 2rem;
    }
    </style>
""", unsafe_allow_html=True)

# Title and description
st.title("🔬 AI-Powered Skin Cancer Detection")
st.markdown("""
    This tool uses advanced machine learning models (GANs and CNNs) to analyze skin lesions 
    and detect potential signs of skin cancer. Upload a clear image of the skin lesion for analysis.
""")

# Sidebar information
with st.sidebar:
    st.header("About the Analysis")
    st.info("""
        Our system uses:
        - Generative Adversarial Networks (GANs)
        - Convolutional Neural Networks (CNNs)
        - Deep Learning Image Processing
        
        For best results:
        1. Use clear, well-lit images
        2. Ensure the lesion is centered
        3. Avoid shadows or glare
    """)

# Main content
col1, col2 = st.columns([2, 1])

with col1:
    uploaded_file = st.file_uploader("Choose an image...", type=["jpg", "jpeg", "png"])
    
    if uploaded_file is not None:
        # Display the uploaded image
        image = Image.open(uploaded_file)
        st.image(image, caption='Uploaded Image', use_column_width=True)
        
        # Add analysis button
        if st.button('Analyze Image'):
            with st.spinner('Processing image...'):
                # Simulate analysis time
                time.sleep(2)
                
                # Here you would normally:
                # 1. Preprocess the image
                # 2. Run it through your ML models
                # 3. Get predictions
                
                # For demo, we'll show sample results
                st.success('Analysis Complete!')
                
                # Display results
                st.subheader("Analysis Results")
                col_res1, col_res2 = st.columns(2)
                
                with col_res1:
                    st.metric("Malignant Probability", "15%")
                    st.metric("Benign Probability", "85%")
                
                with col_res2:
                    st.metric("Confidence Score", "92%")
                    st.metric("Image Quality", "Good")
                
                # Additional details
                st.subheader("Detailed Analysis")
                st.markdown("""
                    - **Classification**: Benign melanocytic nevus
                    - **Key Features Detected**: 
                        * Regular borders
                        * Consistent coloration
                        * Symmetrical shape
                    - **Recommendation**: Low risk, but regular monitoring advised
                """)
                
                # Disclaimer
                st.warning("""
                    **Medical Disclaimer**: This is an AI-assisted analysis tool and should not be 
                    used as a substitute for professional medical diagnosis. Please consult with a 
                    healthcare provider for proper medical advice.
                """)

with col2:
    if uploaded_file is None:
        st.info("👈 Upload an image to begin analysis")
        st.markdown("""
            ### Guidelines for image upload:
            1. Clear, focused image
            2. Good lighting
            3. Minimal glare or shadows
            4. Lesion should be centered
            5. Include some surrounding skin
        """)
    
# Footer
st.markdown("---")
st.markdown("""
    <div style='text-align: center'>
        <p>Powered by Advanced AI Models | For research and educational purposes only</p>
    </div>
""", unsafe_allow_html=True) 