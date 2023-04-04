import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./createResume.css";
import './view.css'

function Create() {
  const [isView, setIsView] = useState(false);
  const [allDetails, setAllDetails] = useState([]);
  const [details, setDetails] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    profession: "",
    state: "",
    zip: "",
  });

  const [allExp, setAllExp] = useState([]);
  const [experience, setExperience] = useState({
    company: "",
    role: "",
    duration: "",
  });

  const [allEducation, setAllEducation] = useState([]);
  const [education, setEducation] = useState({
    institution: "",
    course: "",
    year: "",
  });

  const [allSkills, setAllSkills] = useState([]);
  const [skill, setSkill] = useState({skills:" "});

  const [allLang, setAllLang] = useState([]);
  const [lang, setLang] = useState({lang:" "});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevs) => {
      return { ...prevs, [name]: value };
    });
  };

  const handleskillChange = (e) => {
    const { name, value } = e.target;
    setSkill((preSkill) => {
      return { ...preSkill, [name]: value };
    });
  };

  const handleLangChange = (e) => {
    const { name, value } = e.target;
    setLang((preLang) => {
      return { ...preLang, [name]: value };
    });
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setEducation((preEdu) => {
      return { ...preEdu, [name]: value };
    });
  };

  const handleExpChange = (e) => {
    const { name, value } = e.target;
    setExperience((preExp) => {
      return { ...preExp, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSkills = () => {
    let temp = [...allSkills];
    temp.push(skill);
    window.alert("Added");
    setAllSkills([...temp]);
    console.log(temp);
  };
  

  const handleLanguage = () => {
    let temp = [...allLang];
    temp.push(lang);
    window.alert("Added");
    setAllLang([...temp]);
  };

  const handleEducation = () => {
    let temp = [...allEducation];
    temp.push(education);
    window.alert("Added");
    setAllEducation([...temp]);
  };

  const handleExp = () => {
    let temp = [...allExp];
    temp.push(experience);
    window.alert("Added");
    setAllExp([...temp]);
  };

  const handleCreate = () => {
    let temp = [...allDetails];
    temp.push(details);
    setAllDetails([...temp]);
    setIsView(true);
  };
 
  return (
    <div className="container">
      {isView == false ? (
        <div className="child">
          <h3 className="header"> Build your Resume!</h3>
          <form onSubmit={handleSubmit}>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="name">Name</label>
                <input
                  name="name"
                  onChange={handleInputChange}
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
              <div class="form-group col-md-6">
                <label for="email">Email</label>
                <input
                  name="email"
                  onChange={handleInputChange}
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Your Email"
                  required/>
              </div>
            </div>

            <div class="form-group">
              <label for="address">Address</label>
              <textarea
                name="address"
                onChange={handleInputChange}
                type="text"
                class="form-control"
                id="address"
                placeholder="Your Address"
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="phone">Phone</label>
                <input
                  name="phone"
                  onChange={handleInputChange}
                  type="text"
                  class="form-control"
                  id="phone"
                  placeholder="Your phone number"
                  required
                />
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputCity">Profession</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    class="form-control"
                    id="inputCity"
                    name="profession"
                    placeholder="Your Profession"
                    required
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputState">State</label>
                  <select
                    name="state"
                    onChange={handleInputChange}
                    id="inputState"
                    class="form-control"
                  >
                    <option defaultValue="kerala" selected>
                      Choose
                    </option>
                    <option>Kerala</option>
                    <option>Tamil Nadu</option>
                    <option>Karnataka</option>
                    <option>Telengana</option>
                    <option>Andhra Pradesh</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <label for="inputZip">Zip</label>
                  <input
                    onChange={handleInputChange}
                    name="zip"
                    type="text"
                    class="form-control"
                    id="inputZip"
                    required
                  />
                </div>
              </div>
            </div>

            <h4> Education</h4>
            <div class="form-row">
              <div class="form-group col-md-5">
                <label for="education">Instituition</label>
                <input
                  onChange={handleEducationChange}
                  name="institution"
                  type="text"
                  class="form-control"
                  id="education"
                  placeholder="Add Instituition"
                  required
                />
              </div>
              <div class="form-group col-md-4">
                <label for="Course"> Course/Degree</label>
                <input
                  type="text"
                  name="course"
                  onChange={handleEducationChange}
                  class="form-control"
                  id="course"
                  placeholder="what you have studied"
                  required
                />
              </div>
              <div class="form-group col-md-2">
                <label for="year">Year</label>
                <input
                  type="text"
                  name="year"
                  onChange={handleEducationChange}
                  class="form-control"
                  id="year"
                  placeholder="completed Year"
                  required
                />
              </div>
              <button onClick={handleEducation} className="add-btn">
                {" "}
                Add
              </button>
            </div>

            <h4> Experience</h4>
            <div class="form-row">
              <div class="form-group col-md-5">
                <label for="experience">Company</label>
                <input
                  name="company"
                  type="text"
                  onChange={handleExpChange}
                  class="form-control"
                  id="education"
                  placeholder="Add company"
                  required
                />
              </div>
              <div class="form-group col-md-4">
                <label for="role"> Role/Post</label>
                <input
                  type="text"
                  name="role"
                  onChange={handleExpChange}
                  class="form-control"
                  id="role"
                  placeholder="in which field"
                  required
                />
              </div>
              <div class="form-group col-md-2">
                <label for="year">Duration (in year)</label>
                <input
                  type="number"
                  name="duration"
                  onChange={handleExpChange}
                  class="form-control"
                  id="year"
                  placeholder="experience"
                  required
                />
              </div>
              <button onClick={handleExp} className="add-btn">
                {" "}
                Add
              </button>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="skill">Skills</label>
                <div class="input-group">
                  <input
                    name="skills"
                    type="text"
                    onChange={handleskillChange}
                    class="form-control"
                    id="skill"
                    placeholder="Add Skill"
                    required
                  />
                  <div class="input-group-append">
                    <button onClick={handleSkills} className="Add-sl">
                      {" "}
                      Add
                    </button>
                  </div>
                </div>
              </div>
              <div class="form-group col-md-6">
                <label for="lang">Languages</label>
                <div class="input-group">
                  <input
                    name="lang"
                    type="text"
                    onChange={handleLangChange}
                    class="form-control"
                    id="lang"
                    placeholder="Add Language"
                    required
                  />
                  <div class="input-group-append">
                    <button onClick={handleLanguage} className="Add-sl">
                      {" "}
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-btn">
              <button
                onClick={handleCreate}
                type="submit"
                className="Create-btn"
              >
                Create Resume
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="view-container">
          {allDetails.map((details) => {
            return (
              <div className="view-main-header">
                <div className="view-header">
                  <h3> {details?.name} </h3>
                  <h4> {details?.profession} </h4>
                </div>
                <div className="address-view">
                  <h6> {details?.email} </h6> <br />
                  <h6> {details?.phone} </h6> <br />
                  <h6> {details?.address} </h6> <br />
                  <h6>
                    {" "}
                    {details.state} | {details.zip}{" "}
                  </h6>{" "}
                  <br />
                </div>
              </div>
            );
          })}

          <div className="education-details">
            <h3 className="head-3"> Education</h3>
            {allEducation.map((education) => {
              return (
                <div className="education-view">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title"> {education?.course} </h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        {" "}
                        {education?.institution}
                      </h6>
                      <h6> {education?.year} </h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="experience-details">
            <h3 className="head-3"> Experience</h3>
            {allExp.map((experience) => {
              return (
                <div className="experience-view">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title"> {experience?.role} </h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        {" "}
                        {experience?.company}
                      </h6>
                      <h6> {experience?.year} </h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="skills-all">
            <h3 className="head-3"> Skills</h3>
            { allSkills.map((skill)=>{
              return(
                <div className="skills-view">
                  <ul class="list-group">
                    <li class="list-group-item"> {skill.skills} </li>
                  </ul>
                </div>
              )
            })}
          </div>

          <div className="lang-all">
            <h3 className="head-3"> Languages</h3>
            {allLang.map((langs)=>{
              return(
                 <div className="lang-view">
                  <ul class="list-group">
                    <li class="list-group-item"> {langs.lang} </li>
                  </ul>
                </div>
              )
            })}
               
          </div>
        </div>
      )}
    </div>
  );
}

export default Create;
