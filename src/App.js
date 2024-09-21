
import './App.css';
import './index.js'

function App() {
  function scrollu() {
    window.scrollBy({top:775});
  }
  
  function scrolld() {
    window.scrollBy({top:-775});
  }
  function home(){
    window.scrollTo(0,0);  }
    function about(){
      window.scrollTo(0,775);  }
      function contact(){
        window.scrollTo(0,2000);  }
  function spin(){
    document.getElementById("arrow").style.transform = "rotateZ(360deg)";
    setTimeout(function() {
      window.scrollTo(0, 775);
    }, 1000);
  }
  return (
    <div className="App">
      <div className='pg1'>
        <div className='nav'>
          <li onClick={home}>HOME</li>
          <li onClick={about}>ABOUT</li>
          <li onClick={contact}>CONTACT</li>

        </div>
        <div className='header'>
         <div className='BREAST' >
         <h1>BREAST</h1>
         <h1>CANCER</h1>
         </div>
         <div className='PREDICTOR'>
         <h1>PREDICTOR</h1>
         </div>
         <div className='img'></div>
        </div>
        <div className='slogan'>
          <h1>Early Detection Saves Lives: Check, Act, and Fight Breast Cancer</h1>
          <div className='arrow' id='arrow' onClick={spin}> 
          </div>
        </div>
        <div className='but1'>
        <div className='next1' onClick={scrollu}></div>
        <div className='back1' onClick={scrolld}></div>
        </div>
      </div>
    <div className='pg2'>
      <div className="overview">
        <h1>Overview of Breast Cancer:</h1>
        <p>Breast cancer occurs when abnormal cells in the breast grow uncontrollably, forming a tumor that can be benign (non-cancerous) or malignant (cancerous). It’s the most common cancer in women worldwide but can also affect men. Early detection through screening, self-exams, and awareness greatly improves the chances of successful treatment.</p>
      </div>
      <div className="types">
        <h1>Types of Breast Cancer:</h1>
        <p>
          <li>Ductal Carcinoma in Situ (DCIS): Non-invasive, found in the milk ducts, and has not spread to surrounding tissues.</li>
          <li>Invasive Ductal Carcinoma: The most common type, where cancer cells spread beyond the milk ducts to other parts of the breast.</li>
          <li>Invasive Lobular Carcinoma (ILC): Begins in the lobules (milk-producing glands) and can spread to other body parts.</li>
          <li>Triple-Negative Breast Cancer: Lacks estrogen, progesterone, and HER2 receptors, making it more aggressive and harder to treat.</li>
          <li>HER2-Positive: Cancer cells overproduce HER2 protein, leading to faster growth, but treatments target this specific receptor.</li>
        </p>
      </div>
      <div className="unaw">
        <h1>Unawareness About Breast Cancer:</h1>
        <p>Despite awareness campaigns, unawareness remains a significant challenge, especially in rural or underprivileged areas. Lack of education on self-exams, fear of diagnosis, and cultural stigmas prevent many from seeking timely care. Additionally, younger women and men often overlook the possibility of breast cancer, leading to late-stage diagnoses in these groups.</p>
      </div>
      <div className="sym">
        <h1>Symptoms:</h1>
        <p>
          <li>Lump in the Breast: A painless lump or thickening that feels different from surrounding tissue is often the first sign.</li>
          <li>Change in Breast Shape or Size: Sudden changes in one breast could signal cancer.</li>
          <li>Skin Changes: Dimpling, redness, or scaling of the breast skin.</li>
          <li>Nipple Discharge: Unusual discharge, particularly if it’s bloody.</li>
          <li>Nipple Inversion or Retraction: Nipple turning inward or changing position.</li>
          <li>Swelling or Pain: Although rare, some breast cancers may cause swelling or pain in the breast or armpit.</li>
        </p>
      </div>
    </div>
    <div className='pg3'>
      <div className='prev'>
        <div className='prevtx'>
        <h1>Prevention</h1>
        <p>
        Early detection through regular self-exams and screenings can significantly reduce the risk of severe outcomes from breast cancer. Maintaining a healthy lifestyle and being aware of personal risk factors are key steps in prevention
        </p>
        </div>
        <div className='cards'>
          <div className='card1'>
            <div className='ph1'></div>
            <div className='tx1'>Regular self-exams and clinical check-ups</div>
          </div>
          <div className='card2'>
          <div className='ph2'></div>
          <div className='tx2'>Maintaining a healthy lifestyle (exercise, proper diet)</div>
          </div>
          <div className='card3'>
          <div className='ph3'></div>
          <div className='tx3'>Genetic counseling and testing for those with family histories</div>
          </div>
          <div className='card4'>
          <div className='ph4'></div>
          <div className='tx4'>Awareness of personal risk factors (age, family history, reproductive history)
          </div>
          </div>
        </div>
      </div>
      

    </div>

    <div className='pg4'>
    <div className='footer'>
        <div className='logo'></div>
        <div className='navigate'>
          <h3>Navigate</h3>
          <p>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </p>
        </div>
        <div className='contact'>
        <h3>Contact Us</h3>
          <p>
            <li>Name</li>
            <li>Mobile No</li>
            <li>Email</li>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}



export default App;
