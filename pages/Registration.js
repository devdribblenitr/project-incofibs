import React from 'react'
import { useState } from 'react'


const Registration = () => {

	const [one,setOne]= useState(true);
	const [two,setTwo]= useState(false);
	const [three,setThree]= useState(false);

	const [inpval, setInpval] = useState({  
		name:"",     
        email: "",                
		designation: "",
		organisation: "",
		address: "",
		title: "",
		accomodation: "",		
		gender:'',
		presentation: "",
		phonenumber: "",
		accompany: "",
    })
   const [editname,setEditname] = useState(false);
   
   const func1 = (e)=>{
	e.preventDefault();
	setEditname(!editname);
   }
    const [data,setData] = useState([]);
    //console.log(inpval);

    const getData = (e) => {
        // console.log(e.target.value);

        let name,value;
        name  = e.target.name;
        value  = e.target.value;
        
		setInpval({...inpval,[name]: value})
		console.log(inpval);
    }

    const addData = (e) => {
        e.preventDefault();

              
            console.log("data added succesfully");           
            localStorage.setItem("user",JSON.stringify([inpval]));	      

    }	

  return (
    <div>           

        {one && <div class="container mx-auto">
			<div class="flex justify-center px-6 my-2">
				
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">				
					
					
					<div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
						
						<form class="px-8 pt-6 pb-8  bg-white rounded">
							
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									Name
								</label>
								
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="name"
									type="text"
									placeholder="Name"									
									name="name"
									onChange={getData}
								/>		                        
								
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									Designation
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="name"
									type="text"
									placeholder="Designation"
									name='designation'
									onChange={getData}
								/>
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									Organisation
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="name"
									type="text"
									placeholder="Organisation"
									name='organisation'
									onChange={getData}
								/>
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									Address
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-10 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="name"
									type="text"
									placeholder="Address"
									name='address'
									onChange={getData}
								/>
							</div>
							
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									Phone Number
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="name"
									type="text"
									placeholder="Phone Number"
									name='phonenumber'
									onChange={getData}
								/>
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									Email
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Email"
									name='email'
									onChange={getData}
								/>
							</div>
							
								<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" >
									Title of the Paper
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="name"
									type="text"
									placeholder="title of the Paper"
									name='title'
									onChange={getData}
								/>
							    </div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" >
										Are you submitting any paper for presentation?
									</label>
									<div class="flex justify-left mb-6">
                                     <div class="form-check form-check-inline mr-8">
                                       <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border                                    border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none                                    transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2                                    cursor-pointer" type="radio" name="presentation"  value="option1" onChange={getData}/>
                                       <label class="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
                                     </div>
                                     <div class="form-check form-check-inline">
                                       <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border                                    border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none                                    transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2                                    cursor-pointer" type="radio" name="presentation" value="option2" onChange={getData}/>
                                       <label class="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
                                     </div>
									 </div>
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" >
										Accomodation Required
									</label>
									<div class="flex justify-left mb-6">
                                     <div class="form-check form-check-inline mr-8">
                                       <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border                                    border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none                                    transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2                                    cursor-pointer" type="radio" name="accomodation" id="inlineRadio1" value="option1" onChange={getData}/>
                                       <label class="form-check-label inline-block text-gray-800" >Yes</label>
                                     </div>
                                     <div class="form-check form-check-inline">
                                       <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border                                    border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none                                    transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2                                    cursor-pointer" type="radio" name="accomodation" id="inlineRadio2" value="option2" onChange={getData}/>
                                       <label class="form-check-label inline-block text-gray-800" >No</label>
                                     </div>
									 </div>
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" >
										Gender
									</label>
									<div class="flex justify-left mb-6">
                                     <div class="form-check form-check-inline mr-8">
                                       <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border                                    border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none                                    transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2                                    cursor-pointer" type="radio" name="gender" id="inlineRadio1" value="option1" onChange={getData}/>
                                       <label class="form-check-label inline-block text-gray-800" >Male</label>
                                     </div>
                                     <div class="form-check form-check-inline">
                                       <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border                                    border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none                                    transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2                                    cursor-pointer" type="radio" name="gender" id="inlineRadio2" value="option2" onChange={getData}/>
                                       <label class="form-check-label inline-block text-gray-800" >Female</label>
                                     </div>
									 </div>
								</div>
							 
							
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									Details of Accompanying person, if any:
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="name"
									type="text"
									placeholder=""
									name='accompany' onChange={getData}
								/>
							</div>
							
							
						</form>
						<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
									onClick={addData}
								>
									Register
								</button>
							</div>
                        
						<div class=" flex justify-center">
                          
                          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
						  onClick={()=> {
                            setOne(false);
                            setTwo(true);
                           }}>
                            Next
                          </button>
                        </div>
					</div>
				</div>
			</div>
		</div>}











        {/* nextnextelement */}
		{two && <div class="container mx-auto">
			<div class="flex justify-center px-6 my-2">
				
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">				
					
					
					<div class="w-full lg:w-7/12 bg-white  rounded-lg lg:rounded-l-none">
						
						<form class="px-8 pt-6 pb-8  bg-white rounded">
							
							<div class="mb-4">
								<div className='flex justify-between p-2'>
								<label class="block mb-2 text-sm font-bold text-gray-700" for="">
									Name
								</label>
								<button onClick={func1}>edit</button>
								</div>
								{!editname ?
								<input
								class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="name"
								type="text"
								value={inpval.name}
								name='name'								
							    />
								
								:
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="name"
									type="text"
									placeholder=""
									name='name'
									value={inpval.name}
									onChange={getData}
								/>}
							</div>
							<div class="mb-4">
								<div className='flex justify-between p-2'>
								<label class="block mb-2 text-sm font-bold text-gray-700" for="">
									Designation
								</label>
								<button onClick={func1}>edit</button>
								</div>
								{!editname ?
								<input
								class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="name"
								type="text"
								value={inpval.designation}
								name='designation'								
							    />
								
								:
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="name"
									type="text"
									placeholder=""
									name='designation'
									value={inpval.designation}
									onChange={getData}
								/>}
							</div>
							<div class="mb-4">
								<div className='flex justify-between p-2'>
								<label class="block mb-2 text-sm font-bold text-gray-700" for="">
									Organisation
								</label>
								<button onClick={func1}>edit</button>
								</div>
								{!editname ?
								<input
								class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="name"
								type="text"
								value={inpval.organisation}
								name='organisation'								
							    />
								
								:
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="name"
									type="text"
									placeholder=""
									name='organisation'
									value={inpval.organisation}
									onChange={getData}
								/>}
							</div>
							<div class="mb-4">
								<div className='flex justify-between p-2'>
								<label class="block mb-2 text-sm font-bold text-gray-700" for="">
									Address
								</label>
								<button onClick={func1}>edit</button>
								</div>
								{!editname ?
								<input
								class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="name"
								type="text"
								value={inpval.address}
								name='address'								
							    />
								
								:
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="name"
									type="text"
									placeholder=""
									name='address'
									value={inpval.address}
									onChange={getData}
								/>}
							</div>
							
							<div class="mb-4">
								<div className='flex justify-between p-2'>
								<label class="block mb-2 text-sm font-bold text-gray-700" for="">
									Phone number
								</label>
								<button onClick={func1}>edit</button>
								</div>
								{!editname ?
								<input
								class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="name"
								type="text"
								value={inpval.phonenumber}
								name='phonenumber'								
							    />
								
								:
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="name"
									type="text"
									placeholder=""
									name='phonenumber'
									value={inpval.phonenumber}
									onChange={getData}
								/>}
							</div>
							<div class="mb-4">
								<div className='flex justify-between p-2'>
								<label class="block mb-2 text-sm font-bold text-gray-700" for="">
									Email
								</label>
								<button onClick={func1}>edit</button>
								</div>
								{!editname ?
								<input
								class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="name"
								type="text"								
								name='email'
								value={inpval.email}								
							    />								
								:
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="name"
									type="text"									
									name='email'
									value={inpval.email}
									onChange={getData}
								/>}
							</div>
							
							<div class="mb-4">
								<div className='flex justify-between p-2'>
								<label class="block mb-2 text-sm font-bold text-gray-700" for="">
									Title
								</label>
								<button onClick={func1}>edit</button>
								</div>
								{!editname ?
								<input
								class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="name"
								type="text"
								value={inpval.title}
								name='title'								
							    />
								
								:
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="name"
									type="text"
									placeholder=""
									name='title'
									value={inpval.title}
									onChange={getData}
								/>}
							</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" >
										Are you submitting any paper for presentation?
									</label>
									<div class="flex justify-left mb-6">
                                     <div class="form-check form-check-inline mr-8">
                                       <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border                                    border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none                                    transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2                                    cursor-pointer" type="radio" name="presentation"  value="option1" onChange={getData} checked={inpval.presentation==='option1'}/>
                                       <label class="form-check-label inline-block text-gray-800" >Yes</label>
                                     </div>
                                     <div class="form-check form-check-inline">
                                       <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border                                    border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none                                    transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2                                    cursor-pointer" type="radio" name="presentation" value="option2" onChange={getData} checked={inpval.presentation==='option2'}/>
                                       <label class="form-check-label inline-block text-gray-800" >No</label>
                                     </div>
									 </div>
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" >
										Accomodation Required
									</label>
									<div class="flex justify-left mb-6">
                                     <div class="form-check form-check-inline mr-8">
                                       <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border                                    border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none                                    transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2                                    cursor-pointer" type="radio" name="accomodation" id="inlineRadio1" value="option1" checked={inpval.accomodation==='option1'} onChange={getData}/>
                                       <label class="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
                                     </div>
                                     <div class="form-check form-check-inline">
                                       <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border                                    border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none                                    transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2                                    cursor-pointer" type="radio" name="accomodation" id="inlineRadio2" value="option2" checked={inpval.accomodation==='option2'} onChange={getData}/>
                                       <label class="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
                                     </div>
									 </div>
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
										Gender
									</label>
									<div class="flex justify-left mb-6">
                                     <div class="form-check form-check-inline mr-8">
                                       <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border                                    border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none                                    transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2                                    cursor-pointer" type="radio" name="gender" value="option1" checked={inpval.gender==='option1'}
									   onChange={getData}/>
                                       <label class="form-check-label inline-block text-gray-800" for="inlineRadio10">Male</label>
                                     </div>
                                     <div class="form-check form-check-inline">
                                       <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border                                    border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none                                    transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2                                    cursor-pointer" type="radio" name="gender"  value="option2" checked={inpval.gender==='option2'}
									   onChange={getData}/>
                                       <label class="form-check-label inline-block text-gray-800" >Female</label>
                                     </div>
									 </div>
								</div>
								
							    
							
								<div class="mb-4">
								<div className='flex justify-between p-2'>
								<label class="block mb-2 text-sm font-bold text-gray-700" for="">
									Details of accompanying person ,if any:
								</label>
								<button onClick={func1}>edit</button>
								</div>
								{!editname ?
								<input
								class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="name"
								type="text"
								value={inpval.accompany}
								name='accompany'								
							    />
								
								:
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="name"
									type="text"
									placeholder=""
									name='accompany'
									value={inpval.accompany}
									onChange={getData}
								/>}
							</div>
							
							
						</form>
						<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
									onClick={addData}
								>
									Confirm
								</button>
							</div>
                        
						<div class=" flex justify-center">
                          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
						  onClick={()=> {
                            setOne(true);
                            setTwo(false);
                        }} 
						  >
                            Prev
                          </button>
                          {/* <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
						  onClick={()=> {
                            setTwo(false);
                            setThree(true);
                        }}>
                            Next
                          </button> */}
                        </div>
					</div>
				</div>
			</div>
		</div>}
    
    </div>
  )
}

export default Registration