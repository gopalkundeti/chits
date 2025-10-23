import React from 'react'

const backup = () => {
    
  return (
    <>
    <div>backup</div>
    // <Link to = '/pages/home'></Link>
//     <div>
//     <br></br>
//     <br></br>
//     <br></br>
//     <Container>
//         <Row>
//             <Col></Col>
//             <Col><h3>Create New Account</h3></Col>
//             <Col></Col>
//         </Row>
//         <Row>
//             <Col></Col>
//             <div class="col-sm-4">
//             <Col><label for="input1" class="form-label">Mobile Number</label></Col>
//             </div>
//             <Col></Col>
//         </Row>
//         <Row>
//             <Col></Col>
//             <Col>
//                 <Col>
//                     <div class="input-group mb-3">
//                         <input type="text" class="form-control" placeholder="+91 ******" aria-label="+91 ******" aria-describedby="button-addon2"></input>
//                         <button class="btn btn-primary" type="button" id="button-addon2">Send OTP</button>
//                     </div>
//                 </Col>
//             </Col>
//             <Col></Col>
//         </Row>
//         <Row>
//             <Col></Col>
//             <div class="col-sm-4">
//             <Col><label for="input1" class="form-label">Verify Otp</label></Col>
//             </div>
//             <Col></Col>
//         </Row>
//         <Row>
//             <Col></Col>
//             <Col>
//                 <Col>
//                     <div class="input-group mb-3">
//                         <input type="text" class="form-control" placeholder="****" aria-label="****" aria-describedby="button-addon2"></input>
//                         <button type="button" class="btn btn-light">Verify</button>
//                     </div>
//                 </Col>
//             </Col>
//             <Col></Col>
//         </Row>
//         <Row>
//             <Col></Col>
//             <Col></Col>
//             <Col><label for="input2" class="form-label">Already have an account?</label></Col>
//             <Col><Link to="/login">log in</Link></Col>
//             <Col></Col>
//             <Col></Col>
//         </Row>
//     </Container>
// </div>
<form>
      <label
        for="phone-input"
        class="block mb-2 text-sm font-medium text-gray-900"
      >
        Phone Number:
      </label>
      <input maxLength={16}
        type="tel"
        id="phone-input"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5"
        placeholder="+91 12-345-6789"
        required
      />
      <button
        type="submit"
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Register
      </button>
    </form>
    </>
  )
}

export default backup