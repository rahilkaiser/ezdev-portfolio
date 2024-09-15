"use client";
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FaSpinner } from 'react-icons/fa';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '../ui/input';
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name muss mindestens 2 Zeichen lang sein.",
  }),
  email: z.string().email({
    message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
  }),
  phone: z.string().optional(),
  budget: z.string({
    required_error: "Bitte wählen Sie einen Budgetbereich aus.",
  }),
  message: z.string().min(10, {
    message: "Die Nachricht muss mindestens 10 Zeichen lang sein.",
  }),
});

const budgetRanges = [
  "5'000 - 10'000 €",
  "10'000 - 20'000 €",
  "20'000 - 50'000 €",
  "50'000+ €"
];

function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      budget: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSuccess(false);
    setError(false);

    // Hier können Sie die Logik zum Senden der Daten implementieren
    // Simulieren Sie eine API-Anfrage
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      form.reset();
    }, 2000);
  }

  const companyDetails = [
    { icon: <Phone className="w-6 h-6" />, title: "Telefon", description: "+41 123 456 789" },
    { icon: <Mail className="w-6 h-6" />, title: "E-Mail", description: "info@example.com" },
    { icon: <MapPin className="w-6 h-6" />, title: "Adresse", description: "Musterstrasse 123, 8000 Zürich" },
    { icon: <Clock className="w-6 h-6" />, title: "Öffnungszeiten", description: "Mo-Fr: 9:00 - 18:00" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gradient-to-b from-background to-background/90 text-foreground"
    >
      <div className="container mx-auto px-4 space-y-12">
        <h2 className="text-5xl font-bold mb-16 text-center text-accent">Kontakt</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12 order-2 lg:order-1 ">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Name" {...field} className={`bg-card/50  ${form.formState.dirtyFields.name ? 'border-accent' : 'border-accent/20'}`} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="email" placeholder="E-Mail" {...field} className={`bg-card/50  ${form.formState.dirtyFields.email ? 'border-accent' : 'border-accent/20'}`} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Telefon" {...field} className={`bg-card/50  ${form.formState.dirtyFields.phone ? 'border-accent' : 'border-accent/20'}`} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-card/50 border-accent/20">
                            <SelectValue placeholder="Wählen Sie einen Budgetbereich" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>{range}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Ihre Nachricht"
                          {...field}
                          className="h-32 bg-card/50 border-accent/20"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  variant="outline"
                  className="w-full border-2 bg-primary border-accent text-accent hover:bg-accent/80 transition-colors duration-500"
                  disabled={isLoading}
                >
                  {isLoading ? <FaSpinner className="animate-spin mr-2" /> : null}
                  {isLoading ? 'Wird gesendet...' : 'Nachricht senden'}
                </Button>
                {success && <p className="text-sm text-accent">Nachricht erfolgreich gesendet!</p>}
                {error && <p className="text-sm text-destructive">Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.</p>}
              </form>
            </Form>
          </div>
          <div className="space-y-12 order-1 lg:order-2">
            <div className="flex flex-col gap-8 justify-center h-full">
              {companyDetails.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4"
                >
                  <div className="p-3 bg-accent/10 rounded-full text-accent">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
        <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.0762142086247!2d8.539607776191611!3d47.37689997106679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a08cc0e6e41%3A0x9d56b3523a8fc3c8!2sParadeplatz%2C%208001%20Z%C3%BCrich!5e0!3m2!1sen!2sch!4v1689251461311!5m2!1sen!2sch" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
      </div>
    </motion.section>
  );
}

export default ContactSection;