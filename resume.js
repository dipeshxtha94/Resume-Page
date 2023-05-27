import React, { useState } from 'react'
import styles from '../style/resume.module.css'
import { AiTwotoneDelete } from 'react-icons/ai'

const Resume = () => {

    const [names, setNames]= useState({first:'', last:'', pic:'', gender:'', mobile:'' , email:'', address:'', college:'', education:'', startDate:'', endDate:'', stream:''})

    const [jobs, setJobs]= useState([{position:'', organizationName:'', startDate:'', endDate:''}])
    const [internship, setInternship]= useState([{position:'', organizationName:'', startDate:'', endDate:''}])
    const [skills, setSkills]= useState([{skills: ''}])
    const [flag, setFlag]= useState()
    const [addJobs, setAddJobs]= useState({position:'', organizationName:'', startDate:'', endDate:''})
    const [editedValues, setEditedValues]= useState({})
    const [addIntern, setAddIntern]= useState({position:'', organizationName:'', startDate:'', endDate:''})
    const [addSkills, setAddSkills]= useState({skills:''})
    const [ID, setID]= useState()
    const [allJobs, setAllJobs]= useState([])
    const [allIntern, setAllIntern]= useState([])
    const [allSkills, setAllSkills]= useState([])
 //console.log(jobs)
// console.log(addJobs)
// console.log(addIntern)
// console.log(addSkills)
// console.log(internship)
//console.log(editedValues)
//console.log(skills)
    const handleNo= ()=>{
        let a= document.getElementById('startForm').style
        a.display= 'none'
       let b = document.getElementById('form1').style
       b.display= 'flex'
       setNames({first:'', last:'', pic:'', gender:'', mobile:'' , email:'', address:'', college:'', education:'', startDate:'', endDate:'', stream:''})
    }

    const handleYes= ()=>{
        let a= document.getElementById('startForm').style
        a.display= 'none'
    }

    function validateMobileNumber(mobileNumber) {
      const regex = /^98\d{8}$/; // matches "98" followed by 8 digits
      return regex.test(mobileNumber);
    }
    function validateEmail(email) {
      const regex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return regex.test(email);
    }

    const handleSubmit=(e)=>{
      e.preventDefault()

      //const allowedTypes = ["image/png", "image/jpeg", "image/gif"];
      // if (!allowedTypes.includes(names.pic.type)) {
      //   alert("File type is not allowed. Allowed types: png, jpeg, gif");
      // } else if (names.pic.size > 1048576) {
      //   alert("File size must be less than 1 MB");
      // }
       if(names.first==="" || names.last==="" || names.email==="" || names.mobile==="" || names.stream==="" || names.education==="" || names.address==="" || names.pic==="" || names.startDate==="" ||names.endDate==="" ||names.gender==="" || names.college===""){
        alert("Please fill the form")
        return false;
       } else if(!validateMobileNumber(names.mobile)){
         alert("Mobile number should be start with 98 and must have 10 digits")
         return false;
       }else if(!validateEmail(names.email)){
        alert("Email is not valid")
        return false;
       } else if(names.startDate> names.endDate){
        alert('Start date should be earlier than end date')
        return false
       } else{
         let b = document.getElementById('form1').style
       b.display= 'none'
       let c = document.getElementById('mainContent').style
       c.display= 'block'
       }
    }

//console.log(names.mobile.length)
    const handleOnchangeIntern=(e)=>{
      let data={
        ...addIntern,
        [e.target.name]: e.target.value
      }
      setAddIntern(data)
    }

    const handleAddJobs=()=>{
      let a= document.getElementById('addForm').style
      a.display='block'
      let b= document.getElementById('mainContent').style
      b.opacity=0.5
      setFlag('job')
      setAddJobs({position:'', organizationName:'', startDate:'', endDate:''})
    }

    const handleEditJobs=(id)=>{
      setEditedValues(jobs[ID])
      let a= document.getElementById('jobsEditForm').style
      a.display='block'
      let b= document.getElementById('mainContent').style
      b.opacity=0.5
      setFlag('job')
      // setEditedValues((prevValues) => ({
      //   ...prevValues,
      //   [id]: jobs.find((item) => item.id === id).value,
      // }));
      setID(id)
      const abc= allJobs[id]
      //console.log(abc)
      setEditedValues(abc);
    } 

    const handleDeleteJobs=(data)=>{
  setAllJobs(allJobs.filter((e) =>{
    return allJobs.indexOf(e) !== data
  } ))
    }
// console.log(flag)

    const handleEditEducation=()=>{
      let a= document.getElementById('jobsEditForm').style
      a.display='block'
      let b= document.getElementById('mainContent').style
      b.opacity=0.5
      setFlag('education')
    }

    const handleEditNames=()=>{
      let a= document.getElementById('jobsEditForm').style
      a.display='block'
      let b= document.getElementById('mainContent').style
      b.opacity=0.5
      setFlag('names')
    }
    //console.log(addIntern)

    const handleAddIntern=async()=>{
      await setAddIntern([{position:'', organizationName:'', startDate:'', endDate:''}])
      let a= document.getElementById('addForm').style
      a.display='block'
      let b= document.getElementById('mainContent').style
      b.opacity=0.5
      setFlag('intern')
      setAddIntern({position:'', organizationName:'', startDate:'', endDate:''})
    }

    const handleEditIntern=(id)=>{
      let a= document.getElementById('jobsEditForm').style
      a.display='block'
      let b= document.getElementById('mainContent').style
      b.opacity=0.5
      setFlag('intern')
      setID(id)
      const abc= allIntern[id]
      //console.log(abc)
      setEditedValues(abc);
    }

    const handleDeleteIntern=(data)=>{
      setAllIntern(allIntern.filter((item) =>{
        return allIntern.indexOf(item) !== data
      } ));
    }

    const handleAddSkills=async()=>{
      let a= document.getElementById('addForm').style
      a.display='block'
      let b= document.getElementById('mainContent').style
      b.opacity=0.5
      setFlag('skills')
      setAddSkills({skills:''})
    }

   const handleDeleteSkills=(data)=>{
    setAllSkills(allSkills.filter((e) =>{
      return allSkills.indexOf(e)!== data
    } ));
   }


    const handleSubmitEdit=(id)=>{
      id.preventDefault()
      if(flag===''){}
      if(flag==='education'){
        if(names.startDate>names.endDate){
          alert('Start date should be earlier than end date')
          return false
        } else{
        let a= document.getElementById('jobsEditForm').style
        a.display='none'
        let b= document.getElementById('mainContent').style
        b.opacity=1}
      }
      if(flag==='job'){
        if(editedValues.startDate>editedValues.endDate){
          alert('Start date should be earlier than end date')
          return false
        } else{
      let a= document.getElementById('jobsEditForm').style
      a.display='none'
      let b= document.getElementById('mainContent').style
      b.opacity=1
      let copy= [...allJobs]
      copy[ID]= editedValues
      setAllJobs(copy)}
    } else if(flag==='intern'){
      if(editedValues.startDate>editedValues.endDate){
        alert('Start date should be earlier than end date')
        return false
      } else{
      let a= document.getElementById('jobsEditForm').style
      a.display='none'
      let b= document.getElementById('mainContent').style
      b.opacity=1
      let copy= [...allIntern]
      copy[ID]= editedValues
      setAllIntern(copy)}
    } else{
      if(editedValues.startDate>editedValues.endDate){
        alert('Start date should be earlier than end date')
        return false
      } else{
      let a= document.getElementById('jobsEditForm').style
      a.display='none'
      let b= document.getElementById('mainContent').style
      b.opacity=1
      let copy= [...skills]
      copy[ID]= editedValues
      setSkills(copy)}
    }
    }
// console.log(jobs)
// console.log(internship)
// console.log(skills.skills)
    const handleSubmitAdd=(e)=>{
      e.preventDefault()
      if(flag===''){

      }
      if(flag==='job'){
        if(addJobs.startDate>addJobs.endDate){
          alert('Start date should be earlier than end date')
          return false
        } else{
      let a= document.getElementById('addForm').style
      a.display='none'
      let b= document.getElementById('mainContent').style
      b.opacity=1
      if(addJobs.position===undefined || addJobs.organizationName===undefined || addJobs.startDate===undefined || addJobs.endDate===undefined){
        alert('Please fill the form')
        return false;
      } else{
        //if(skills.skills=undefined)
        let data= {position: addJobs.position, organizationName: addJobs.organizationName, startDate: addJobs.startDate, endDate: addJobs.endDate}
        setAllJobs([...allJobs,data])
      }}
    } else if(flag==='intern'){
      if(addIntern.startDate>addIntern.endDate){
        alert('Start date should be earlier than end date')
        return false
      } else{
      let a= document.getElementById('addForm').style
      a.display='none'
      let b= document.getElementById('mainContent').style
      b.opacity=1
      if(addIntern.position===undefined || addIntern.organizationName===undefined || addIntern.startDate===undefined || addIntern.endDate===undefined){
        alert('Please fill the form')
        return false;
      } else{
        let data= {position: addIntern.position, organizationName: addIntern.organizationName, startDate: addIntern.startDate, endDate: addIntern.endDate}
        setAllIntern([...allIntern,data])
      }}

    } else{
      if(addSkills.startDate>addSkills.endDate){
        alert('Start date should be earlier than end date')
        return false
      } else{
      let a= document.getElementById('addForm').style
      a.display='none'
      let b= document.getElementById('mainContent').style
      b.opacity=1
     if(addSkills.skills===undefined){
      alert('Please fill the form')
        return false;
     } else{
      
      let data= {skills: addSkills.skills}
        setAllSkills([...allSkills,data])
    
     }}
    }
    }

    

  return (
    <div className={styles.container}>
      {/* already have resume form */}
        <div className={styles.startForm} id='startForm'>
            <label className={styles.label}>Already Have resume?</label>
            <div className={styles.buttons}>
             <button className={styles.yes} onClick={handleYes}>Yes</button>
             <button className={styles.no} onClick={handleNo}>No</button>
            </div>
        </div>
        <div className={styles.resumeForm}>
        {/* resume form */}
         <form className={styles.form1} id='form1'>
            <div className={styles.names}>
                <div className={styles.firstname}>
                <label htmlFor='first' className={styles.first}>FirstName</label><br/>
           <input type='text' name='first' className={styles.inpfirst} pattern="[A-Za-z]" maxLength="10" onChange={(e)=>{setNames({...names,[e.target.name]: e.target.value})}} value={names.first} required />
                </div>
                <div className={styles.lastname}>
                <label htmlFor='last' className={styles.last}>LastName</label><br/>
           <input type='text' name='last' className={styles.inplast} pattern="[A-Za-z]" maxLength="10"  onChange={(e)=>{setNames({...names,[e.target.name]: e.target.value})}} value={names.last} required />
                </div>
           
            </div>
            <div className={styles.profilediv}>
            <label htmlFor='pic' className={styles.pic} >Profile Picture</label>
           <input id='pic' type='file' name='pic' className={styles.pic} onChange={(e)=>{setNames({...names,[e.target.name]: e.target.value})}} value={names.pic} accept="image/x-png,image/gif,image/jpeg" max-size='1024' required />
            </div>
           
           <div className={styles.genderdiv}>
           <label htmlFor='gender' className={styles.gender}>Gender</label>
           <select name='gender' className={styles.selectgender}  onChange={(e)=>{setNames({...names,[e.target.name]: e.target.value})}} value={names.gender} required >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
           </select>
           </div>
           
           <div className={styles.mobilediv}>
           <label htmlFor='mobile' className={styles.mob}>Mobile Number</label>
           <input type='tel' name='mobile' className={styles.inpmob} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={(e)=>{setNames({...names,[e.target.name]: e.target.value})}} value={names.mobile} required />
           </div>
           
           <div className={styles.emaildiv}>
           <label htmlFor='email' className={styles.email}>Email</label>
           <input type='email' name='email' className={styles.inpemail} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={(e)=>{setNames({...names,[e.target.name]: e.target.value})}} value={names.email} required />
           </div>
           
           <div className={styles.addressdiv}>
           <label htmlFor='address' className={styles.address}>Adress</label>
           <input type='text' name='address' className={styles.inpaddress} maxLength="20" placeholder='ex: Urlabari-1, Morange'  onChange={(e)=>{setNames({...names,[e.target.name]: e.target.value})}} value={names.address} required />
           </div>

           <div className={styles.educationdiv}>
          <label htmlFor='college' className={styles.education}>College</label>
           <input type='text' name='college' className={styles.inpeducation} maxLength="20"  onChange={(e)=>{setNames({...names,[e.target.name]: e.target.value})}} value={names.college} required />
          </div>
          
          <div className={styles.educationdiv}>
          <label htmlFor='education' className={styles.education}>Education</label>
           <input type='text' name='education' className={styles.inpeducation} maxLength="10"  onChange={(e)=>{setNames({...names,[e.target.name]: e.target.value})}} value={names.education} required />
          </div>
           
           <div className={styles.datediv}>
            <div className={styles.startdiv}>
            <label htmlFor='startDate' className={styles.start}>Start Date</label><br/>
           <input type='date' name='startDate' className={styles.inpstart} onChange={(e)=>{setNames({...names,[e.target.name]: e.target.value})}} value={names.startDate} required />
            </div>
            <div className={styles.enddiv}>
            <label htmlFor='endDate' className={styles.end}>End Date</label><br/>
           <input type='date' name='endDate' className={styles.inpend} onChange={(e)=>{setNames({...names,[e.target.name]: e.target.value})}} value={names.endDate} required />
            </div>
           </div>
          
          <div className={styles.streamdiv}>
          <label htmlFor='stream' className={styles.stream}>Stream</label>
           <input type='text' name='stream' className={styles.inpstream} maxLength="10"  onChange={(e)=>{setNames({...names,[e.target.name]: e.target.value})}} value={names.stream} required />
          </div>
           
           <input type='submit' className={styles.submit} onClick={handleSubmit} />

         </form>
    
        </div>
        
        <div className={styles.mainContent} id='mainContent'>
          {/* resume content*/}
          <h1 className={styles.title}>Resume</h1>
          <div className={styles.subContent}>
            <div className={styles.header}>
              <div className={styles.header1}>
                 <h2 className={styles.nameOf}>{names.first}</h2>
                 <h2 className={styles.lastOf}>{names.last}</h2> 
                 <button className={styles.edit} onClick={handleEditNames}>Edit</button>
                 <button className={styles.download}>Download</button>
              </div>
             <div className={styles.header2}>
              <p className={styles.p}>{names.email}</p>
              <p className={styles.p}>{names.mobile}</p>
              <p className={styles.p}>{names.address}</p>
             </div>
            </div>
            <div className={styles.content}>
              <hr/>
              <div className={styles.contentEdu}>
                <div className={styles.contentEdu1}>
                  <h4 className={styles.edutitle}>Education</h4>
                </div>
                <div className={styles.contentEdu2}>
                  <p className={styles.edup}>{names.stream}</p>
                  <p className={styles.edup}>{names.college}</p>
                  <div className={styles.startEnd}>
                  <p className={styles.edup}>{names.startDate!=='' && `${names.startDate} -`} </p>
                  <p className={styles.edup}>{names.endDate}</p>
                  </div>
                </div>
                <div className={styles.contentEdu3}>
                  <button className={styles.edit} onClick={()=>handleEditEducation()}>Edit</button>
                </div>
              </div>
              <hr/>
              <div className={styles.contentEdu}>
                <div className={styles.contentEdu1}>
                  <h4 className={styles.edutitle}>Jobs</h4>
                </div>
                <div style={{display:'flex', flexDirection:'column'}}>
                       <div style={{display:'flex', flexDirection:'column'}}>
                {allJobs.map((value, id)=>{
                  return <div key={id} >
                    
                 {allJobs!==undefined && <div style={{display:'flex'}}><div  className={styles.contentEdu2}>
                  <p className={styles.edup}>{value.position}</p>
                  <p className={styles.edup}>{value.organizationName}</p>
                  <div className={styles.startEnd}>
                  <p className={styles.edup}>{ `${value.startDate} -  `}</p>
                  <p className={styles.edup} style={{margin:"0 0 5px 0"}}>{value.endDate}</p>
                 </div></div>
                 <div className={styles.contentEdu3}>
                 <button className={styles.edit} onClick={()=>handleEditJobs(id)}>Edit</button>
                </div>
                <div className={styles.contentEdu3}>
                  <button className={styles.edit} onClick={()=>handleDeleteJobs(id)}>Delete</button>
                </div></div>}
                  
                 </div>
                })}</div>
                <button className={styles.edit} style={{margin:"7px 0 3px 0"}} onClick={handleAddJobs}>Add</button></div>
              </div>
              <hr/>

      

               <div className={styles.contentEdu}>
                <div className={styles.contentEdu1}>
                  <h4 className={styles.edutitle}>Internship</h4>
                </div>
                <div style={{display:'flex', flexDirection:'column'}}>
                       <div style={{display:'flex', flexDirection:'column'}}>
                {allIntern.map((value, id)=>{
                  return <div key={id} >
                 <div style={{display:'flex'}}><div  className={styles.contentEdu2}>
                  <p className={styles.edup}>{value.position}</p>
                  <p className={styles.edup}>{value.organizationName}</p>
                  <div className={styles.startEnd}>
                  <p className={styles.edup}>{`${value.startDate} -  `}</p>
                  <p className={styles.edup} style={{margin:"0 0 5px 0"}}>{value.endDate}</p>
                 </div></div>
                 <div className={styles.contentEdu3}>
                   <button className={styles.edit} onClick={()=>handleEditIntern(id)}>Edit</button>
                </div>
                <div className={styles.contentEdu3}>
                  <button className={styles.edit} onClick={()=>handleDeleteIntern(id)}>Delete</button>
                </div></div>
                  
                 </div>
                })}</div>
                <button className={styles.edit} style={{margin:"7px 0 3px 0"}} onClick={handleAddIntern}>Add</button></div>
              </div>
              <hr/>

              <div className={styles.contentEdu}>
                <div className={styles.contentEdu1}>
                  <h4 className={styles.edutitle}>Skills</h4>
                </div>
                <div style={{display:'flex', flexDirection:'column'}}>
                       <div style={{display:'flex', flexDirection:'row', margin:'1.3rem'}}>
                {allSkills.map((value, id)=>{
                  return <div key={id}  style={{border:'1px solid black', borderRadius:'11px', margin:'0 3px'}}>
                    
                  <div style={{display:'flex'}}><div  className={styles.contentEdu2}>
                  <p className={styles.edup} style={{margin:"0 0 0 4px"}}>{value.skills}</p>
                  </div>
                <div className={styles.contentEdu3}>
                  <button style={{border:'none', background:'transparent', color:'black'}} onClick={()=>handleDeleteSkills(id)}><AiTwotoneDelete /></button>
                </div></div>
                  
                 </div>
                })}</div>
                <button className={styles.edit} style={{margin:"7px 0 3px 50px", width:'3rem', height:'1.3rem'}} onClick={handleAddSkills}>Add</button></div>
              </div>
              <hr/>
           
          
            </div>
          </div>
        </div>

        <div className={styles.jobsEditForm} id='jobsEditForm'>
        {/* edit  form */}
           <form>
            {flag==='job' && <h4 className={styles.jobsFormTitle}>Edit Jobs</h4>}
            {flag==='intern' && <h4 className={styles.jobsFormTitle}>Edit Internship</h4>}
            {flag==='skills' && <h4 className={styles.jobsFormTitle}>Edit Skills</h4>}
            {flag==='education' && <h4 className={styles.jobsFormTitle}>Edit Education</h4>}
            {flag==='names' && <h4 className={styles.jobsFormTitle}>Edit Names</h4>}
           <div className={styles.genderdiv}>
          { flag==='job' && <><label htmlFor='position' className={styles.gender}>Position</label>
           <input type='text' name='position' className={styles.selectgender}  onChange={(e)=>{setEditedValues({...editedValues,[e.target.name]: e.target.value})}} value={editedValues.position} required /></>}
           { flag==='education' && <><label htmlFor='stream' className={styles.gender}>Stream</label>
           <input type='text' name='stream' className={styles.selectgender}  onChange={(e)=>{setNames({...names,[e.target.name]: e.target.value})}} value={names.stream} required /></>}
           { flag==='names' && <><label htmlFor='first' className={styles.gender}>FirstName</label>
           <input type='text' name='first' className={styles.selectgender}  onChange={(e)=>{setNames({...names,[e.target.name]: e.target.value})}} value={names.first} required /></>}
           { flag==='intern' && <><label htmlFor='position' className={styles.gender}>Position</label>
           <input type='text' name='position' className={styles.selectgender}  onChange={(e)=>{setEditedValues({...editedValues,[e.target.name]: e.target.value})}} value={editedValues.position} required /></>}
           </div>
           <div className={styles.genderdiv}>
           { flag==='job' && <><label htmlFor='organizationName' className={styles.gender}>Organization Name</label>
           <input type='text' name='organizationName' className={styles.selectgender}  onChange={(e)=>{setEditedValues({...editedValues,[e.target.name]: e.target.value})}} value={editedValues.organizationName} required /></>}
           { flag==='names' && <><label htmlFor='last' className={styles.gender}>LastName</label>
           <input type='text' name='last' className={styles.selectgender}  onChange={(e)=>{setNames({...names,[e.target.name]: e.target.value})}} value={names.last} required /></>}
           { flag==='education' && <><label htmlFor='college' className={styles.gender}>College</label>
           <input type='text' name='college' className={styles.selectgender}  onChange={(e)=>{setNames({...names,[e.target.name]: e.target.value})}} value={names.college} required /></>}
           { flag==='intern' && <><label htmlFor='organizationName' className={styles.gender}>Organization Name</label>
           <input type='text' name='organizationName' className={styles.selectgender}  onChange={(e)=>{setEditedValues({...editedValues,[e.target.name]: e.target.value})}} value={editedValues.organizationName}required /></>}
           </div>
           <div className={styles.genderdiv}>
           { flag==='job' && <><label htmlFor='startDate' className={styles.gender}>Start Date</label>
           <input type='date' name='startDate' className={styles.selectgender}  onChange={(e)=>{setEditedValues({...editedValues,[e.target.name]: e.target.value})}} value={editedValues.startDate} required /></>}
           { flag==='names' && <><label htmlFor='email' className={styles.gender}>Email</label>
           <input type='email' name='email' className={styles.selectgender}  onChange={(e)=>{setNames({...names,[e.target.name]: e.target.value})}} value={names.email} required /></>}
           { flag==='education' && <><label htmlFor='startDate' className={styles.gender}>Start Date</label>
           <input type='date' name='startDate' className={styles.selectgender}  onChange={(e)=>{setNames({...names,[e.target.name]: e.target.value})}} value={names.startDate} required /></>}
           { flag==='intern' && <><label htmlFor='startDate' className={styles.gender}>Start Date</label>
           <input type='date' name='startDate' className={styles.selectgender}  onChange={(e)=>{setEditedValues({...editedValues,[e.target.name]: e.target.value})}} value={editedValues.startDate} required /></>}
           </div>
           <div className={styles.genderdiv}>
           {flag==='job' && <><label htmlFor='endDate' className={styles.gender}>End Date</label>
           <input type='date' name='endDate' className={styles.selectgender}  onChange={(e)=>{setEditedValues({...editedValues,[e.target.name]: e.target.value})}} value={editedValues.endDate} required /><br/><br/></>}
           { flag==='names' && <><label htmlFor='mobile' className={styles.gender}>Mobile no</label>
           <input type='tel' name='mobile' className={styles.selectgender}  onChange={(e)=>{setNames({...names,[e.target.name]: e.target.value})}} value={names.mobile} required /></>}
           { flag==='education' && <><label htmlFor='endDate' className={styles.gender}>End Date</label>
           <input type='date' name='endDate' className={styles.selectgender}  onChange={(e)=>{setNames({...names,[e.target.name]: e.target.value})}} value={names.endDate} required /></>}
           { flag==='intern' && <><label htmlFor='endDate' className={styles.gender}>End Date</label>
           <input type='date' name='endDate' className={styles.selectgender}  onChange={(e)=>{setEditedValues({...editedValues,[e.target.name]: e.target.value})}} value={editedValues.endDate} required /></>}
           
           </div>
           <div className={styles.genderdiv}>
           { flag==='names' && <><label htmlFor='address' className={styles.gender}>Address</label>
           <input type='text' name='address' className={styles.selectgender}  onChange={(e)=>{setNames({...names,[e.target.name]: e.target.value})}} value={names.address} required /><br/><br/></>}
           <input type='submit' className={styles.submit} style={{margin:'0 0 0.5rem 0'}} onClick={handleSubmitEdit} />
           </div>
           </form>
        </div>


        <div className={styles.jobsEditForm} id='addForm' autoComplete="off">
        {/* add  form */}
           <form autoComplete='off'>
            {flag==='job' && <h4 className={styles.jobsFormTitle}>Add Jobs</h4>}
            {flag==='intern' && <h4 className={styles.jobsFormTitle}>Add Internship</h4>}
            {flag==='skills' && <h4 className={styles.jobsFormTitle}>Add Skills</h4>}
           <div className={styles.genderdiv}>
          { flag==='job' && <><label htmlFor='position' className={styles.gender}>Position</label>
           <input type='text' name='position' className={styles.selectgender}  onChange={(e)=>{setAddJobs({...addJobs,[e.target.name]: e.target.value})}} value={addJobs.position} autoComplete="off" required /></>}
           { flag==='intern' && <><label htmlFor='position' className={styles.gender}>Position</label>
           <input type='text' name='position' className={styles.selectgender}  onChange={(e)=> handleOnchangeIntern(e)} value={addIntern.position} required /></>}
           { flag==='skills' && <><label htmlFor='skills' className={styles.gender}>Skill</label>
           <input type='text' name='skills' className={styles.selectgender}  onChange={(e)=>{setAddSkills({...addSkills,[e.target.name]: e.target.value})}} value={addSkills.skills} required /></>}
           </div>
           <div className={styles.genderdiv}>
           { flag==='job' && <><label htmlFor='organizationName' className={styles.gender}>Organization Name</label>
           <input type='text' name='organizationName' className={styles.selectgender}  onChange={(e)=>{setAddJobs({...addJobs,[e.target.name]: e.target.value})}} value={addJobs.organizationName} required /></>}
           { flag==='intern' && <><label htmlFor='organizationName' className={styles.gender}>Organization Name</label>
           <input type='text' name='organizationName' className={styles.selectgender}  onChange={(e)=>handleOnchangeIntern(e)} value={addIntern.organizationName} required /></>}
           </div>
           <div className={styles.genderdiv}>
           { flag==='job' && <><label htmlFor='startDate' className={styles.gender}>Start Date</label>
           <input type='date' name='startDate' className={styles.selectgender}  onChange={(e)=>{setAddJobs({...addJobs,[e.target.name]: e.target.value})}} value={addJobs.startDate} required /></>}
           { flag==='intern' && <><label htmlFor='startDate' className={styles.gender}>Start Date</label>
           <input type='date' name='startDate' className={styles.selectgender}  onChange={(e)=>handleOnchangeIntern(e)} value={addIntern.startDate} required /></>}
           </div>
           <div className={styles.genderdiv}>
           {flag==='job' && <><label htmlFor='endDate' className={styles.gender}>End Date</label>
           <input type='date' name='endDate' className={styles.selectgender}  onChange={(e)=>{setAddJobs({...addJobs,[e.target.name]: e.target.value})}} value={addJobs.endDate} required /><br/><br/></>}
           { flag==='intern' && <><label htmlFor='endDate' className={styles.gender}>End Date</label>
           <input type='date' name='endDate' className={styles.selectgender}  onChange={(e)=>handleOnchangeIntern(e)} value={addIntern.endDate} required /><br/><br/></>}
           <input type='submit' className={styles.submit} style={{margin:'0 0 0.5rem 0'}} onClick={handleSubmitAdd} />
           </div>
           </form>
        </div>
    </div>
  )

  }
export default Resume 