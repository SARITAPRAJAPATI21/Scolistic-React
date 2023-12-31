import React from 'react';


/*const Scholarship=()=>{
  return(
    <div>
      <h1>Scholarships</h1>
    </div>
  )
}
export default Scholarship;*/
import './Scholarship.css'
const img1="https://www.currentschoolnews.com/wp-content/uploads/2020/02/5e1ed9f3a3367.png";
const img2="https://media.istockphoto.com/id/1211976415/photo/student-sitting-on-campus-stock-photo.jpg?s=612x612&w=0&k=20&c=FHmI4ToQjmU7F64TJCyjPXSL0D0fyGN-ThfbPhfR9mY=";
const img3="https://whitetulip.org/wp-content/uploads/2021/12/team-of-healthcare-workers-with-id-badges-outside-e1643051405979.jpg";
const img4="http://static1.squarespace.com/static/5f81f8b2bf83f006a7cad66e/5fc31c2618e72e5fdb3e187a/5fce60a3f94b6402b24de2f6/1642024275441/international-students-thumbnail.jpg?format=1500w";
const img5="https://media.swipepages.com/2021/3/0214_foreign-admits-blog-cover-design-how-to-get-scholarship-to-study-abroad-for-indian-students_.jpg";
const img6="https://myeducationhub.com/wp-content/uploads/2016/06/1754556-Copy.jpg";
const img7="https://lh3.googleusercontent.com/-YGvGAvm_GnfUfXtUDdUJ2WpP9jSQ_L1ALCt_1yDcQYEMGsB9_CACZ6SYJL_chR6p3upk8W5yl8FA3acVZ4UBPVXoSj0sdQ5Ugax12BqA7EHixYxKtqZ=w1400-rwa";
const img8="https://www.britishcouncil.in/sites/default/files/istock-623351544.jpg";
const img9="https://www.palantir.com/assets/xrfr7uokpv1b/6LacvRQC3QQX2LLOrFIqo/3b02aae0a588abd492480760c7a60132/Whiteboard_Collaboration.jpg?quality=70&width=1600";
const Scholarship=()=>{
return(
    <>
<h1> National Scholarship</h1>
    <div id='id1'>
       
        <img src={img1} alt=''/>
        <h4>Law Scholarship</h4>
        <p>Legal Education has become one of the most expensive
         professional courses to opt for in India. The annual fee
          of most of the Law 
        Schools in India, goes into lacks of Rupees.
         This is a huge barrier for a lot of students
          to study Law (LL.B.).</p>
          <button className='my-btn'><a className='my-link' href='/'>Read more</a></button>
    </div>
    <div id='id2'>
    <img src={img2} alt=''/>
    <h4>Engineer Scholarship</h4>
    <p>In this article, we have mentioned the Scholarship
     For Engineering Students provided by the Central & State
     government in 2022, which will help
      in pursuing the beautiful dreams of the students t
      o take them way ahead in life. </p>
      <button className='my-btn'><a className='my-link' href='/'>read more</a></button>
    </div>
    <div id='id3'>
    <img src={img3} alt=''/>
    <h4>Medical Scholarship</h4>
<p>In India, the cost of studying medical 
can be humungous if you get into any private college.
 In comparison, the cost in government colleges is low.
  On an average, the cost to study medicine in governmen
  t colleges in India ranges between rupees 5,000 to rupee
  s 30,000 per annum, with a
 yearly hostel fee around
  rupees 50,000. The problem of the hour is not the fee to study medical in government colleges. </p>
  <button className='my-btn' >
  <a  className ="my-link"href='https://www.buddy4study.com/article/top-scholarships-for-medical-students'>
  Read more</a></button>
    </div>
<h1> International Scholarship</h1>

<div id='id1'>
<img src={img4} alt=''/>
<h4>Study in US</h4>
<p> If you are an international student looking to complete your degree in the US,
 Ohio Christian 
University is here to help you
 every step of the way. We offer a $3,000 
scholarship for both academics and athletics, and have a dedicated support team to help 
students settle in to life on campus. </p>
<button className='my-btn'><a className='my-link' href='https://www.ohiochristian.edu/lp/international?utm_source=google&utm_campaign=international&utm_medium=search&utm_content=indhk&utm_term=international%20student%20scholarship&gclid=EAIaIQobChMImoKYq7q8-wIVw5JmAh0PagIEEAAYASAAEgJysfD_BwE'>Read more</a></button>
</div>

<div id='id2'>
<img src={img6} alt=''/>
<h4> France For Foreign Students</h4>
<p> The French Foreign Ministry grants a variety of scholarships in
 France for international
 students to develop and encourage French education
 worldwide. In the framework of Eiffel, the ministry directly finances around 25% of these scholarships.   </p>
<button className='my-btn'><a className='my-link' href='/'>Read more</a></button>
</div>
<div id='id3'>
<img src={img5} alt=''/>
<h4> Study in UK</h4>
<p> Whether you are thinking about which course and university might be right for you or
 have any enquiry about study in the UK, please submit the form and our UK Education Consultants
  will call you back </p>
<button className='my-btn'><a className='my-link' href='http://pages.fateheducation.com/UK-IR-Admissions-Day-DB-Mar-2021?utm_source=adwords&utm_medium=cpc&utm_campaign=CL-UK-IR-VAD-SA-Mar-2021-Search-V1-DBH-NC&utm_term=Very-Low-Intent&gclid=EAIaIQobChMI4aehobq8-wIVAUkrCh0RlQLnEAAYASAAEgIFhPD_BwE'>Read more</a></button>
</div>
<h1> Tech Scholarship</h1>
<div id='id1'>
<img src={img7} alt=''/>
<h4> Google APAC scholarship</h4>
<p> Generation Google Scholarship: for Women in computer science was established
 to help students pursuing computer science degrees excel 
in technology and become leaders in the field. Selected students will receive $1,000 USD
 for the 2022-2023 school year. </p>
<button className='my-btn'><a className='my-link' href='https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship-apac'>Read more</a></button>
</div>
<div id='id2'>
<img src={img8} alt=''/>
<h4>  Grace hopper Scholarship</h4>
<p>To welcome undergraduate students, graduate students, and faculty 
who could not otherwise attend the Celebration, AnitaB.org is providing a 
limited number of scholarships that include complimentary
 registration to the virtual component of Grace Hopper Celebration 2022 (GHC 22) and other benefits.  </p>
<button className='my-btn'><a className='my-link' href='https://ghc.anitab.org/attend/scholarships/academics/'>Read more</a></button>
</div>
<div id='id3'>
<img src={img9} alt=''/>
<h4> Palantir Global Impact Scholarship</h4>
<p>  We hope to encourage these students in their computer science,
 engineering, and technical studies, and celebrate their potential to become 
 leaders in these fields. We especially
 encourage students from communities that are historically underrepresented in 
 the field of technology to apply.</p>
<button className='my-btn'><a className='my-link' href='https://www.palantir.com/careers/students/scholarship/global-impact/'>Read more</a></button>
</div>



    </>
);
}
export default Scholarship;