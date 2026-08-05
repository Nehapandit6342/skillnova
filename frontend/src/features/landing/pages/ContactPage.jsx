import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import toast from "react-hot-toast";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import SectionContainer from "@/components/common/SectionContainer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { sendContactMessage } from "@/api/contact.api";

const contactChannels = [
  {
    icon: Mail,
    title: "Email Us",
    value: "support@skillnova.com",
    description: "We reply within 24 hours on business days.",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+977 9800000000",
    description: "Mon – Fri, 9:00 AM to 6:00 PM (NPT).",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Kathmandu, Nepal",
    description: "Drop by our office — we'd love to meet you.",
  },
];

const faqs = [
  {
    question: "Is SkillNova free for students?",
    answer:
      "Yes! Students can create an account, analyze their resume, and explore internships completely free.",
  },
  {
    question: "How long does it take to get a reply?",
    answer:
      "We usually respond within 24 hours on business days. For urgent matters, call us during office hours.",
  },
  {
    question: "Can employers contact you about partnerships?",
    answer:
      "Absolutely. Send us a message through this form or email us directly at partnerships@skillnova.com.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear the field error as soon as the user fixes it
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address";
    }
    if (!form.subject.trim()) nextErrors.subject = "Please enter a subject";
    if (form.message.trim().length < 10) {
      nextErrors.message = "Message should be at least 10 characters";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the highlighted fields");
      return;
    }

    setSending(true);
    try {
      await sendContactMessage(form);
      toast.success("Message sent! We'll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const inputClasses = (hasError) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition-all placeholder:text-slate-400 focus:ring-4 ${
      hasError
        ? "border-red-300 focus:border-red-400 focus:ring-red-100"
        : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
    }`;

  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-40 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl" />

        <SectionContainer className="pt-16 lg:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6 rounded-full px-4 py-1.5">
              <Sparkles className="mr-2 h-4 w-4" />
              We'd love to hear from you
            </Badge>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Let's <span className="text-blue-600">talk</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Questions about SkillNova, partnership opportunities, or feedback
              on the platform? Send us a message and our team will get right back
              to you.
            </p>
          </div>
        </SectionContainer>
      </section>

      {/* ================= CONTACT CARDS ================= */}
      <SectionContainer className="pb-0 lg:pb-0">
        <div className="grid gap-6 md:grid-cols-3">
          {contactChannels.map((channel) => (
            <div
              key={channel.title}
              className="group rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white">
                <channel.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{channel.title}</h3>
              <p className="mt-2 font-semibold text-blue-600">{channel.value}</p>
              <p className="mt-1.5 text-sm text-slate-500">{channel.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* ================= FORM + INFO ================= */}
      <SectionContainer>
        <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:gap-14">
          {/* Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <div className="mb-8 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
                <MessageSquare className="h-6 w-6" />
              </span>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Send us a message</h2>
                <p className="text-sm text-slate-500">
                  Fill out the form and we'll respond within 24 hours.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your Name" error={errors.name}>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClasses(errors.name)}
                  />
                </Field>

                <Field label="Your Email" error={errors.email}>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClasses(errors.email)}
                  />
                </Field>
              </div>

              <Field label="Subject" error={errors.subject}>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className={inputClasses(errors.subject)}
                />
              </Field>

              <Field label="Message" error={errors.message}>
                <textarea
                  name="message"
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us a bit more about your question or feedback..."
                  className={`${inputClasses(errors.message)} resize-none`}
                />
              </Field>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="flex items-center gap-1.5 text-xs text-slate-400">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  We never share your information.
                </p>

                <Button
                  type="submit"
                  size="lg"
                  disabled={sending}
                  className="h-11 px-8 text-base disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Side info */}
          <div className="space-y-6">
            {/* Office hours */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
                <Clock className="h-4 w-4" />
                Office Hours
              </h3>
              <div className="mt-5 space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Monday – Friday</span>
                  <span className="font-semibold text-slate-800">9:00 – 18:00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Saturday</span>
                  <span className="font-semibold text-slate-800">10:00 – 14:00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Sunday</span>
                  <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-500">
                    Closed
                  </span>
                </div>
              </div>
            </div>

            {/* Quick FAQ */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
                <MessageSquare className="h-4 w-4" />
                Quick Answers
              </h3>

              <div className="mt-5 space-y-5">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <p className="text-sm font-semibold text-slate-900">
                      {faq.question}
                    </p>
                    <p className="mt-1.5 text-sm leading-6 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-5 text-white shadow-lg">
                <p className="text-sm font-semibold">Prefer email for partnerships?</p>
                <p className="mt-1 text-sm text-blue-100">
                  Reach us at partnerships@skillnova.com
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
              <MapPin className="h-4 w-4 text-blue-500" />
              Based in Kathmandu, Nepal — helping students everywhere
            </div>
          </div>
        </div>
      </SectionContainer>

      <Footer />
    </>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-500">{error}</span>}
    </label>
  );
}
