/** @format */
import { useRef } from "react";
import classes from "./assets/css/courseForm.module.css";

function CourseForm(props) {
	const firstName = useRef();
	const lastName = useRef();
	const phoneNumber = useRef();
	const eMail = useRef();
	const city = useRef();
	const experience = useRef();
	const company = useRef();
	const designation = useRef();
	const agree = useRef();
	const cursmailid = useRef();
	const program_id = useRef();
	const sfCourseName = useRef();
	const curname = useRef();

	function submitHandler(event) {
		event.preventDefault();

		const first_name_entered = firstName.current.value;
		const last_name_entered = lastName.current.value;
		const phone_number_entered = phoneNumber.current.value;
		const email_entered = eMail.current.value;
		const cityName_entered = city.current.value;
		const exp_entered = experience.current.value;
		const companyName_entered = company.current.value;
		const designationName_entered = designation.current.value;
		const agreed_entered = agree.current.value;
		const mailid_entered = cursmailid.current.value;
		const pid_entered = program_id.current.value;
		const sf_course_name_entered = sfCourseName.current.value;
		const curName_entered = curname.current.value;
		const data = {
			first_name: first_name_entered,
			last_name: last_name_entered,
			phone_number: phone_number_entered,
			email: email_entered,
			cityName: cityName_entered,
			exp: exp_entered,
			companyName: companyName_entered,
			designationName: designationName_entered,
			agreed: agreed_entered,
			mailid: mailid_entered,
			pid: pid_entered,
			sf_course_name: sf_course_name_entered,
			curName: curName_entered,
			post_id: props.id,
		};
		fetch("https://27b65434b1.nxcli.net/SalesForceAPI/insertLeadreact.php", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		}).then(() => alert("Thank You!! Data inserted"));
	}
	return (
		<form id='course-form' method='post' onSubmit={submitHandler}>
			<div className='form-group'>
				<input type='hidden' id='curname' value={props.title} ref={curname} />
				<input
					type='hidden'
					id='cursmailid'
					value={props.email_id}
					ref={cursmailid}
				/>
				<input
					type='hidden'
					id='program_id'
					value={props.program_id}
					ref={program_id}
				/>
				<input
					type='hidden'
					id='sales_force_course_name'
					value={props.sf_course_name}
					ref={sfCourseName}
				/>
				<input
					type='text'
					id='first-name'
					size='40'
					maxLength='50'
					className='form-control'
					placeholder='First Name*'
					ref={firstName}
				/>
			</div>
			<div className='form-group'>
				<input
					type='text'
					id='last-name'
					size='40'
					maxLength='50'
					className='form-control'
					placeholder='Last Name*'
					ref={lastName}
				/>
			</div>
			<div className='form-group'>
				<input
					type='tel'
					id='phone-no'
					size='40'
					maxLength='15'
					className='form-control'
					placeholder='Phone Number*'
					ref={phoneNumber}
				/>
			</div>
			<div className='form-group'>
				<input
					type='email'
					id='e-mail'
					size='40'
					className='form-control'
					placeholder='E-mail*'
					ref={eMail}
				/>
			</div>
			<div className='form-group'>
				{props.id === "813" ? (
					<select name='city' id='city' className='form-control' ref={city}>
						<option value=''>City</option>
						<option value='Mumbai'>Mumbai</option>
						<option value='Delhi NCR'>Delhi NCR</option>
						<option value='Kolkata'>Kolkata</option>
						<option value='Pune'>Pune</option>
						<option value='Bangalore'>Bangalore</option>
						<option value='Hyderabad'>Hyderabad</option>
						<option value='Chennai'>Chennai</option>
						<option value='Others'>Others</option>
					</select>
				) : (
					<select name='city' id='city' className='form-control' ref={city}>
						<option value=''>City</option>
						<option value='Ahmedabad'>Ahmedabad</option>
						<option value='Bangalore'>Bangalore</option>
						<option value='Bhubaneswar'>Bhubaneswar</option>
						<option value='Calcutta'>Calcutta</option>
						<option value='Calicut'>Calicut</option>
						<option value='Chennai'>Chennai</option>
						<option value='Cochin'>Cochin</option>
						<option value='Coimbatore'>Coimbatore</option>
						<option value='Dehradun'>Dehradun</option>
						<option value='Goa'>Goa</option>
						<option value='Hyderabad'>Hyderabad</option>
						<option value='Indore'>Indore</option>
						<option value='Jaipur'>Jaipur</option>
						<option value='Kanpur'>Kanpur</option>
						<option value='Kolkata'>Kolkata</option>
						<option value='Lucknow'>Lucknow</option>
						<option value='Mumbai'>Mumbai</option>
						<option value='Nagpur'>Nagpur</option>
						<option value='Navi Mumbai'>Navi Mumbai</option>
						<option value='New Delhi'>New Delhi</option>
						<option value='Patna'>Patna</option>
						<option value='Pune'>Pune</option>
						<option value='Ranchi'>Ranchi</option>
						<option value='Vadodara'>Vadodara</option>
						<option value='Vizag'>Vizag</option>
						<option value='Other'>Other</option>
					</select>
				)}
			</div>

			<div className='form-group'>
				<select
					name='number-exp'
					id='number-exp'
					className='form-control'
					ref={experience}>
					<option value=''>Experience</option>
					<option value='Upto-1-Year'>Upto-1-Year</option>
					<option value='1-3-Years'>1-3-Years</option>
					<option value='0-2-Years'>0-2-Years</option>
					<option value='1-5-Years'>1-5-Years</option>
					<option value='2-5-years'>2-5-Years</option>
					<option value='3-5-years'>3-5-Years</option>
					<option value='5-10-Years'>5-10-Years</option>
					<option value='10-15-Years'>10-15-Years</option>
					<option value='15-Years+'>15-Years+</option>
				</select>
			</div>

			<div className='form-group'>
				<input
					type='text'
					id='company'
					size='40'
					maxLength='100'
					className='form-control'
					aria-invalid='false'
					placeholder='Company'
					ref={company}
				/>
			</div>
			<div className='form-group'>
				<input
					type='text'
					id='designation'
					size='40'
					className='form-control'
					aria-invalid='false'
					placeholder='Designation'
					ref={designation}
				/>
			</div>

			<div className={classes.chk_tp}>
				<div className='form-group chk'>
					<input
						type='checkbox'
						id='agree'
						className={classes.agree}
						ref={agree}
					/>
					<label htmlFor='agree'>
						{" "}
						You agree to our{" "}
						<a href='' target='_blank' rel='noreferrer'>
							terms and conditions
						</a>{" "}
						and our{" "}
						<a href='' target='_blank' rel='noreferrer'>
							privacy policy.{" "}
						</a>
						Disclaimer By submitting my contact details here, I override my NDNC
						registration and authorise TimesTSW and its authorised
						representatives can contact me.
					</label>
				</div>
			</div>
			<button id='lead-form-submit-button99' className={classes.square_red_btn}>
				Apply Now
			</button>
		</form>
	);
}

export default CourseForm;
