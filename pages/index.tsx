import Image from 'next/image'
import arrow from '../public/arrow.png'
import { useState } from 'react'
import axios from 'axios'
import github from '../public/git.png'
export default function Home() {
  const [email , setEmail] = useState('')
  const [hiddensucess , setHiddensucess] = useState(true)

  const sub = async (e:any) => {
    e.preventDefault();
    try{
      const response = await axios.post("/api/waitlist", {
        email
      })
      if(response.data.message === "User added"){
        hiddensucess ? setHiddensucess(false) : setHiddensucess(true)
 
      }else{
        alert("You are already in the waitlist/ You have entered an invalid email")
      }
      console.log(response)
    } catch (error) {
      console.log(error)
    }

  }



  return(
    
    <div className='master#0'>



      <title>cralwy || home</title>

      {/* navbar code. */}
    <div className=''>
      <div className=''>

      </div>


    </div>

    {/* title heading */}
    <div className="flex justify-center text-4xl font-bold mt-[10rem] text-animation">
        <h1 className=''>
        <span className='ml-[0.60rem]'>A visual and terminal based </span> <br />
        <span className='text-[#06B6D4]'>scraper</span> to extract data easily
        </h1>
    </div>

    {/* center down content */}
    <div className='flex justify-center mt-[1.25rem] text-gray-400 text-animation'>
    <p>
        Start scraping your sites with ease no more code required<br />
         <span className='ml-[1.25rem]'>also includes data parsing,api,automation and more!</span>

        </p>
    </div>
    {/* GITHUB || ICON */}
    <div className='flex justify-center md-[-2.5rem]'>
      <a href='https://github.com/sup-Udh/Scraper-io'>
      <Image 
      src={github}
      height={30}
      alt='github'
      className='mt-[1.25rem]'
      />
      </a>
    
      
    </div>

    {/* Buttons content */}

    <div className='flex justify-center mt-[4.25rem]'>
      <button className='border-[2px] border-[#fff] h-[36px] w-[239px] rounded-md font-light'>
        <a href="#waitlist">Sign Up</a>
        </button>
      <button className='border-1 bg-[#3C3E43] h-[36px] w-[239px] rounded-md font-thin ml-[1.25rem]'><a href='/about'>Learn More</a></button>
    </div>

 


{/* animation buttons */}
    <div className='flex justify-center mt-[3.25rem] animate-bounce'>
     
      <button>
        <a href="#waitlist">
    <Image 
    src={arrow}
    height={30}
    alt='arrow'
    className='mt-[4.25rem]'
    />
    </a>
    </button>


    </div>

    <div id="waitlist">
    {/* div for the waitlist */}
     <div className=" rounded-lg mt-[400px] w-full h-[25rem] bg-gradient-to-b from-purple-500 to-blue-500">
      {/* alert box || sucess */}
     <div  className={hiddensucess ? 'hidden' : "p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"} role="alert">
  <span className="font-medium">Awesome your added!!</span> We'll Soon let you know once we're done  Cooking!! 🎉🎉
</div>
      
      {/* title  */}
      
      <div className='flex justify-center underline underline-offset-4 decoration-3'>
      <p className='mt-[2.5rem] font-bold text-[30px]'>
        Join the <span className=''>beta</span>
      </p>

      </div>


      
{/* mini content div */}
      <div className='flex justify-center mt-[0.25rem]'>
      <p>
      The beta version of crawly will soon be out for users. Drop your <br />
      <span className='ml-[5.25rem]'>Email below we’ll notify you once it’s ready!</span>
      </p>
      </div>
     

        {/* input box */}
    <div className='flex justify-center '>
      <input placeholder='email' type='email' required className='text-left px-2 h-[40px] w-[243px] mt-[2.5rem] border-2 bg-[#fff] rounded-md  focus:border-sky-500 focus:ring-sky-500   text-black ' value={email} onChange={(e:any) => setEmail(e.target.value) } />
      {/* add a button parallel to the input area  */}
      <button onClick={sub} className='mt-[2.5rem] ml-[1.25rem] bg-sky-500 rounded-md h-[4opx] w-[100px] text-sm font-medium'>Join Waitlist</button>
    </div>

    </div>


    </div>


 



    {/* master class div ending */}
    </div>

  )

}
