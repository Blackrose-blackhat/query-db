import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How does QueryGPT work?</AccordionTrigger>
        <AccordionContent>
          QueryGPT uses advanced AI to translate natural language questions into SQL queries that run against your
          database. It analyzes your database schema, understands relationships between tables, and generates optimized
          queries to answer your questions accurately.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is my data secure?</AccordionTrigger>
        <AccordionContent>
          Absolutely. QueryGPT never stores your data. All processing happens within your infrastructure, and we use
          enterprise-grade encryption for all communications. We also offer on-premise deployment options for
          organizations with strict security requirements.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What databases do you support?</AccordionTrigger>
        <AccordionContent>
          QueryGPT supports all major SQL databases including PostgreSQL, MySQL, SQL Server, and Oracle. We also support
          NoSQL databases like MongoDB and document stores like Elasticsearch. If you're using a database not listed
          here, contact us to check compatibility.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Do I need to migrate my database?</AccordionTrigger>
        <AccordionContent>
          No migration required! QueryGPT works with your existing database infrastructure. We provide a simple
          connector that securely communicates with your database without requiring any changes to your schema or data
          structure.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>How accurate are the results?</AccordionTrigger>
        <AccordionContent>
          QueryGPT achieves over 95% accuracy for most common queries. The system continuously learns from interactions
          to improve accuracy over time. For complex queries, it provides confidence scores and can explain its
          reasoning, allowing you to verify the results.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Can I customize the AI's behavior?</AccordionTrigger>
        <AccordionContent>
          Yes, QueryGPT is highly customizable. You can define business rules, set access controls for sensitive data,
          create custom query templates, and even train the AI on your specific domain terminology to improve relevance
          and accuracy.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
