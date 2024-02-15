'use client';
import { useState, useEffect } from 'react';
import { FormData } from '@/models/form.model';

export default function ViewForms() {
  const [data, setData] = useState<FormData[] | null>(null);

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/getForms');
      const result = await response.json();

      setData(result.data);
    })();
  }, []);

  return (
    <div>
      {data?.map((form, index) => {
        return (
          <div key={index}>
            <h1 className="text-2xl">
              Information of <span className="font-semibold">{form.name}</span>
            </h1>
            <h1>Name: {form.name}</h1>
            <h1>Future plan: {form.futureChoice}</h1>
            <h1>Date of birth: {form.dob}</h1>
            <h1>Type: {form.type}</h1>
            <h1>Bank Number: {form.bankNum}</h1>
            <h1>Bank Account Name: {form.bankAccName}</h1>
            <h1>Bank Name: {form.bankName}</h1>
            <h1>Bank Branch: {form.bankBranch}</h1>
            <h1>Condition: {form.term}</h1>
            <h1>Agreement Name: {form.agreementName}</h1>
            <h1>Signature: {form.signatureName}</h1>
            <h1>Date submitted: {form.date}</h1>
          </div>
        );
      })}
    </div>
  );
}
