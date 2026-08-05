import { getTestimonialsService } from "../services/testimonial.service.js";

export const getTestimonials = async (req, res) => {

  try {

    const testimonials =
      await getTestimonialsService();

    return res.status(200).json({

      success: true,

      data: testimonials,

    });

  } catch (error) {

    return res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};