"use client";
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { useLocale, useTranslations } from 'next-intl';
import { companyDetails } from '@/constants/companyDetails';

const budgetRanges = [
  "500 - 1000 €",
  "1000 - 2500 €",
  "2500 - 5000 €",
  "5000+ €"
];

const icons = [
  <Phone className="w-6 h-6" />,
  <Mail className="w-6 h-6" />,
  <MapPin className="w-6 h-6" />,
  <Clock className="w-6 h-6" />
];

interface ContactSectionProps {
  showTitle: boolean;
}

function ContactSection({ showTitle = false }: ContactSectionProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const locale = useLocale();
  const t = useTranslations('Contact');

  const formSchema = z.object({
    name: z.string().min(2, {
      message: t('nameValidation'),
    }),
    email: z.string().email({
      message: t('emailValidation'),
    }),
    phone: z.string().optional(),
    budget: z.string({
      required_error: t('budgetValidation'),
    }),
    message: z.string().min(10, {
      message: t('messageValidation'),
    }),
  });

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



  return (
    <section

      className="py-20 bg-gradient-to-b from-background to-background/90 text-foreground"
    >
      <div className="container mx-auto px-4 space-y-12">
        {showTitle && (<h2 className="text-5xl font-bold mb-16 text-center text-accent">{t('title')}</h2>)}
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
                        <Input placeholder={t('namePlaceholder')} {...field} className={`bg-card/50  ${form.formState.dirtyFields.name ? 'border-accent' : 'border-accent/20'}`} />
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
                        <Input type="email" placeholder={t('emailPlaceholder')} {...field} className={`bg-card/50  ${form.formState.dirtyFields.email ? 'border-accent' : 'border-accent/20'}`} />
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
                        <Input placeholder={t('phonePlaceholder')} {...field} className={`bg-card/50  ${form.formState.dirtyFields.phone ? 'border-accent' : 'border-accent/20'}`} />
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
                            <SelectValue placeholder={t('budgetPlaceholder')} />
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
                          placeholder={t('messagePlaceholder')}
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
                  {isLoading ? t('sendingMessage') : t('sendMessage')}
                </Button>
                {success && <p className="text-sm text-accent">{t('successMessage')}</p>}
                {error && <p className="text-sm text-destructive">{t('errorMessage')}</p>}
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
                    {icons[index]}
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">{t(item.title)}</h4>
                    <p className="text-muted-foreground">{
                      
                     ["email", "phone"].includes(item.title) ? item.description : t(item.description)
                    
                    }</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
        <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.8080692861745!2d13.384944315802905!3d52.41669997979472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a845c8a8a0b3d1%3A0x3f8a4f7b6eb5c4f0!2sPrinz-Heinrich-Stra%C3%9Fe%207A%2C%2012307%20Berlin!5e0!3m2!1s${locale}!2sde!4v1689251461311!5m2!1s${locale}!2sde`}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
      </div>
    </section>
  );
}

export default ContactSection;