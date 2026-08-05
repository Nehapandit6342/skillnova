import {

  // Dashboard
  dashboardService,

  // Students
  getAllStudentsService,
  getStudentByIdService,
  createStudentService,
  updateStudentService,
  deleteStudentService,

  // Employers
  getAllEmployersService,
  getEmployerByIdService,
  updateEmployerService,
  deleteEmployerService,

  // Internships
  getAllInternshipsService,
  getInternshipByIdService,
  createInternshipService,
  updateInternshipService,
  deleteInternshipService,

  // Applications
  getAllApplicationsService,
  updateApplicationService,
  deleteApplicationService,

  // Settings
  getAdminSettingsService,
  updateAdminSettingsService,
  
// Testimonials
getTestimonialsService,
createTestimonialService,
updateTestimonialService,
deleteTestimonialService,
toggleTestimonialService,

// Companies
getCompaniesService,
createCompanyService,
updateCompanyService,
deleteCompanyService,
toggleCompanyService,

// FAQs
getFAQsService,
createFAQService,
updateFAQService,
deleteFAQService,
toggleFAQService,



} from "../services/admin.service.js";



// ================= DASHBOARD =================

export const getDashboard = async (req, res) => {

  try {

    const data = await dashboardService();

    res.status(200).json({
      success: true,
      data,
    });

  } catch (error) {

    console.log("DASHBOARD ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// ================= STUDENTS =================

// GET ALL STUDENTS

export const getStudents = async (req, res) => {

  try {

    const students = await getAllStudentsService();

    res.status(200).json({
      success: true,
      data: students,
    });

  } catch (error) {

    console.log("GET STUDENTS ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// GET STUDENT BY ID

export const getStudentById = async (req, res) => {

  try {

    const student = await getStudentByIdService(req.params.id);

    if (!student) {

      return res.status(404).json({
        success: false,
        message: "Student not found",
      });

    }

    res.status(200).json({
      success: true,
      data: student,
    });

  } catch (error) {

    console.log("STUDENT DETAILS ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// CREATE STUDENT

export const createStudent = async (req, res) => {

  try {

    const student = await createStudentService(req.body);

    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: student,
    });

  } catch (error) {

    console.log("CREATE STUDENT ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// UPDATE STUDENT

export const updateStudent = async (req, res) => {

  try {

    const student = await updateStudentService(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Student updated successfully",
      data: student,
    });

  } catch (error) {

    console.log("UPDATE STUDENT ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// DELETE STUDENT

export const deleteStudent = async (req, res) => {

  try {

    await deleteStudentService(req.params.id);

    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });

  } catch (error) {

    console.log("DELETE STUDENT ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};
// ================= EMPLOYERS =================

// GET ALL EMPLOYERS

export const getAllEmployers = async (req, res) => {

  try {

    const employers = await getAllEmployersService();

    res.status(200).json({
      success: true,
      data: employers,
    });

  } catch (error) {

    console.log("GET EMPLOYERS ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// GET EMPLOYER BY ID

export const getEmployerById = async (req, res) => {

  try {

    const employer = await getEmployerByIdService(req.params.id);

    if (!employer) {

      return res.status(404).json({
        success: false,
        message: "Employer not found",
      });

    }

    res.status(200).json({
      success: true,
      data: employer,
    });

  } catch (error) {

    console.log("EMPLOYER DETAILS ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// UPDATE EMPLOYER

export const updateEmployer = async (req, res) => {

  try {

    const employer = await updateEmployerService(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Employer updated successfully",
      data: employer,
    });

  } catch (error) {

    console.log("UPDATE EMPLOYER ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// DELETE EMPLOYER

export const deleteEmployer = async (req, res) => {

  try {

    await deleteEmployerService(req.params.id);

    res.status(200).json({
      success: true,
      message: "Employer deleted successfully",
    });

  } catch (error) {

    console.log("DELETE EMPLOYER ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};
// ================= INTERNSHIPS =================

// GET ALL INTERNSHIPS

export const getAllInternships = async (req, res) => {

  try {

    const internships = await getAllInternshipsService();

    res.status(200).json({
      success: true,
      data: internships,
    });

  } catch (error) {

    console.log("GET INTERNSHIPS ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// GET INTERNSHIP BY ID

export const getInternshipById = async (req, res) => {

  try {

    const internship = await getInternshipByIdService(req.params.id);

    if (!internship) {

      return res.status(404).json({
        success: false,
        message: "Internship not found",
      });

    }

    res.status(200).json({
      success: true,
      data: internship,
    });

  } catch (error) {

    console.log("INTERNSHIP DETAILS ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



export const createInternship = async (req, res) => {

  try {

    console.log("========== CREATE INTERNSHIP ==========");
    console.log(req.body);

    const internship = await createInternshipService(req.body);

    return res.status(201).json({
      success: true,
      message: "Internship created successfully",
      data: internship,
    });

  } catch (error) {

    console.log("========== CREATE INTERNSHIP ERROR ==========");
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};






// UPDATE INTERNSHIP

export const updateInternship = async (req, res) => {

  try {

    const internship = await updateInternshipService(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Internship updated successfully",
      data: internship,
    });

  } catch (error) {

    console.log("UPDATE INTERNSHIP ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// DELETE INTERNSHIP

export const deleteInternship = async (req, res) => {

  try {

    await deleteInternshipService(req.params.id);

    res.status(200).json({
      success: true,
      message: "Internship deleted successfully",
    });

  } catch (error) {

    console.log("DELETE INTERNSHIP ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};
// ================= APPLICATIONS =================

// GET ALL APPLICATIONS

export const getAllApplications = async (req, res) => {

  try {

    const applications = await getAllApplicationsService();

    res.status(200).json({
      success: true,
      data: applications,
    });

  } catch (error) {

    console.log("GET APPLICATIONS ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// UPDATE APPLICATION

export const updateApplication = async (req, res) => {

  try {

    const application = await updateApplicationService(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Application updated successfully",
      data: application,
    });

  } catch (error) {

    console.log("UPDATE APPLICATION ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// DELETE APPLICATION

export const deleteApplication = async (req, res) => {

  try {

    await deleteApplicationService(req.params.id);

    res.status(200).json({
      success: true,
      message: "Application deleted successfully",
    });

  } catch (error) {

    console.log("DELETE APPLICATION ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// ================= ADMIN SETTINGS =================

// GET ADMIN SETTINGS

export const getAdminSettings = async (req, res) => {

  try {
    console.log("REQ USER:", req.user);

    const admin = await getAdminSettingsService(req.user.id);
    console.log("ADMIN:", admin);

    res.status(200).json({
      success: true,
      data: admin,
    });

  } catch (error) {

    console.log("GET SETTINGS ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// UPDATE ADMIN SETTINGS

export const updateAdminSettings = async (req, res) => {

  try {

    const admin = await updateAdminSettingsService(
      req.user.id,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Settings updated successfully",
      data: admin,
    });

  } catch (error) {

    console.log("UPDATE SETTINGS ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};
// =================================================
// TESTIMONIALS
// =================================================

// GET ALL TESTIMONIALS

export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await getTestimonialsService();

    res.status(200).json({
      success: true,
      data: testimonials,
    });
  } catch (error) {
    console.log("GET TESTIMONIALS ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// CREATE TESTIMONIAL

export const createTestimonial = async (req, res) => {
  try {
    const testimonial = await createTestimonialService(req.body);

    res.status(201).json({
      success: true,
      message: "Testimonial created successfully",
      data: testimonial,
    });
  } catch (error) {
    console.log("CREATE TESTIMONIAL ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE TESTIMONIAL

export const updateTestimonial = async (req, res) => {
  try {
    const testimonial = await updateTestimonialService(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Testimonial updated successfully",
      data: testimonial,
    });
  } catch (error) {
    console.log("UPDATE TESTIMONIAL ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE TESTIMONIAL

export const deleteTestimonial = async (req, res) => {
  try {
    await deleteTestimonialService(req.params.id);

    res.status(200).json({
      success: true,
      message: "Testimonial deleted successfully",
    });
  } catch (error) {
    console.log("DELETE TESTIMONIAL ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// TOGGLE ACTIVE / INACTIVE

export const toggleTestimonial = async (req, res) => {
  try {
    const testimonial = await toggleTestimonialService(req.params.id);

    res.status(200).json({
      success: true,
      message: "Status updated successfully",
      data: testimonial,
    });
  } catch (error) {
    console.log("TOGGLE TESTIMONIAL ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// =================================================
// COMPANIES
// =================================================

export const getCompanies = async (req, res) => {
  try {
    const companies = await getCompaniesService();

    res.status(200).json({
      success: true,
      data: companies,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createCompany = async (req, res) => {
  try {
    const company = await createCompanyService(req.body);

    res.status(201).json({
      success: true,
      data: company,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateCompany = async (req, res) => {
  try {
    const company = await updateCompanyService(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: company,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteCompany = async (req, res) => {
  try {
    await deleteCompanyService(req.params.id);

    res.status(200).json({
      success: true,
      message: "Company deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const toggleCompany = async (req, res) => {
  try {
    const company = await toggleCompanyService(req.params.id);

    res.status(200).json({
      success: true,
      data: company,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// =================================================
// FAQ
// =================================================

export const getFAQs = async (req, res) => {
  try {
    const faqs = await getFAQsService();

    res.status(200).json({
      success: true,
      data: faqs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createFAQ = async (req, res) => {
  try {
    const faq = await createFAQService(req.body);

    res.status(201).json({
      success: true,
      data: faq,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateFAQ = async (req, res) => {
  try {
    const faq = await updateFAQService(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: faq,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteFAQ = async (req, res) => {
  try {
    await deleteFAQService(req.params.id);

    res.status(200).json({
      success: true,
      message: "FAQ deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const toggleFAQ = async (req, res) => {
  try {
    const faq = await toggleFAQService(req.params.id);

    res.status(200).json({
      success: true,
      data: faq,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};