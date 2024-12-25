import { Link } from 'react-router-dom'

function SignIn({isClicked,setIsClicked,userName, setUserName}) {
    console.log(userName)

  return (
    <>
      { isClicked == false ?
      <div className='sign-in'>
          <form >
          <h2>Sign Up</h2>

     
<input onChange={(e)=>{
    
    setUserName(e.target.value)

}} type="text" name="name" placeholder="Enter your Name" required/>


<input type="password" name="email" placeholder="Enter Password" required/>

<Link to={"/"}>
<button className='login' onClick={()=>{
    setIsClicked(true)
}} type="submit">Submit</button>
</Link>
    </form>
     
     </div>
     : <div style={{marginLeft:"20px",marginTop:"200px",width:"98%",display:"flex",justifyContent:"space-between"}}>
     <h1>Hello ,  {userName}</h1>
     <button onClick={()=>{
        setIsClicked(false)
     }} style={{width:"15%",height:"60px",marginRight:"100px"}} className='login'>Log out</button>
     </div>}
     </>

  )
}

export default SignIn
