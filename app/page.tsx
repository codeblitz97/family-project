'use client';

import { Noto_Sans_Bengali } from 'next/font/google';
import FormInput from '@/components/Input';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const bengali = Noto_Sans_Bengali({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['bengali'],
});

export default function Home() {
  const [name, setName] = useState<string>('');
  const [dob, setDob] = useState<string>('');
  const [term, setTerm] = useState<string>('');
  const [futurePlan, setFuturePlan] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [bankNum, setBankNum] = useState<string>('');
  const [bankName, setBankName] = useState<string>('');
  const [bankAccName, setBankAccName] = useState<string>('');
  const [bankBranch, setBankBranch] = useState<string>('');
  const [agreementName, setAgreementName] = useState<string>('');
  const [signatureName, setSignatureName] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [cookies, setCookie] = useCookies(['isSubmitted']);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const submittedStatus = cookies.isSubmitted;
    if (submittedStatus === true) {
      setIsSubmitted(true);
    }
  }, [cookies.isSubmitted]);

  function saveForm() {
    fetch('/api/postForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        dob,
        term,
        futureChoice: futurePlan,
        type,
        bankNum,
        bankName,
        bankAccName,
        bankBranch,
        agreementName,
        signatureName,
        date,
      }),
    })
      .then((response) =>
        response.json().then((data) => {
          setCookie('isSubmitted', true, { path: '/' });
        })
      )
      .catch((e) => {
        console.error(e);
      });
  }

  return (
    <div className={`${bengali.className}`}>
      {isSubmitted ? (
        <div>
          <h1 className="text-4xl">ধন্যবাদ ফর্মটি পূরণ করার জন্যে</h1>
        </div>
      ) : (
        <>
          {' '}
          <div className="text-center lg:mt-5 lg:mb-32 font-semibold">
            <h1 className="text-2xl md:text-3xl lg:text-5xl">
              নিজের সাথে প্রতিজোগিতা (বৃত্তি)
            </h1>
            <h2 className="text-sm md:text-xl lg:text-2xl">২০২২-২০২৪</h2>
            <h2 className="text-sm md:text-xl lg:text-2xl">
              বৃত্তি প্রাপ্তদের ফর্ম{' '}
            </h2>
          </div>
          <div className="flex justify-center items-center h-screen">
            <form className="mt-48 md:mt-36 lg:mt-16 lg:mb-36 flex flex-col gap-5 lg:text-xl">
              <div className="mb-4">
                <label htmlFor="name">তোমার নাম?</label>
                <FormInput
                  name="name"
                  id="name"
                  type="text"
                  className="caret-slate-800 text-black"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="age">জন্মতারিখ?</label>
                <FormInput
                  name="age"
                  id="age"
                  type="text"
                  className="caret-slate-800 text-black"
                  onChange={(event) => setDob(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="class">বড় হয়ে যা হতে চাও{''}</label>
                <FormInput
                  name="class"
                  id="class"
                  type="text"
                  className="caret-slate-800 text-black"
                  onChange={(event) => setFuturePlan(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="reason">তুমি কোন ধরনের বৃত্তি পেয়েছ?</label>
                <select
                  name="reason"
                  id="reason"
                  className="caret-slate-800 text-black"
                  onChange={(event) => setType(event.target.value)}
                  value={type}
                >
                  <option value="standard">সাধারণ</option>
                  <option value="talent">ট্যালেন্টপুল</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="phone">
                  ব্যাংকের একাউন্ট নাম্বার? (Online)
                </label>
                <FormInput
                  name="phone"
                  id="phone"
                  type="text"
                  className="caret-slate-800 text-black"
                  onChange={(event) => setBankNum(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="bn-name">ব্যাংকের একাউন্ট নাম?</label>
                <FormInput
                  name="bn-name"
                  id="bn-name"
                  type="text"
                  className="caret-slate-800 text-black"
                  onChange={(event) => setBankAccName(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="bnk-name">ব্যাংকের নাম?</label>
                <FormInput
                  name="bnk-name"
                  id="bnk-name"
                  type="text"
                  className="caret-slate-800 text-black"
                  onChange={(event) => setBankName(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="branch">ব্যাংকের শাখা?</label>
                <FormInput
                  name="branch"
                  id="branch"
                  type="text"
                  className="caret-slate-800 text-black"
                  onChange={(event) => setBankBranch(event.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="notice mt-48 md:mt-36 lg:mt-8">
            <h2>বৃত্তি পেয়ে যা করতে হবে-</h2>
            <ul>
              <li>
                1. বৃত্তি প্রাপ্ত টাকা হবে, ট্যালেন্টপুলে পেলে মাসিক ২৩০০ টাকা,
                সাধারণ বৃত্তি ১১৫০ টাকা। বৃত্তির টাকা ব্যাংক একাউন্টের মাধ্যমে
                দেওয়া হবে। আগামি ১২ মাস বৃত্তির টাকা পাবে। বৃত্তির টাকা
                মা/বাবাকে দিতে হবে মাসিক ২০০০ টাকা, সাধারণ বৃত্তি ১০০০ টাকা।
                বাবা/মা লেখাপড়ার পেছনে খরচ করবেন।
              </li>
              <li>
                2. বাকি টাকা (৩০০/১৫০) টাকা নিজে খরচ করা যাবে। নিজে কীসে খরচ
                করলে তা যেন বাবা/মা জানে। নিজের টাকা (৩০০/১৫০) থেকে ৫০ টাকা
                প্রতি মাসে ১০ জন ফকির/গরিবদের দান করতে হবে।
              </li>
              <div className="mb-8">
                <li>
                  3. বৃত্তি প্রাপ্তদের মধ্যে যদি কাউকে কোনো শর্ত দেওয়া থাকে তা
                  ছয় মাসের মধ্যে পূর্ণ করতে হবে। না পারলে বৃত্তি বাতিল হয়ে যাবে।
                  নিচে যদি তোমার কোনো শর্ত থাকে তাহলে তা লেখ-
                </li>
                <textarea
                  onChange={(e) => setTerm(e.target.value)}
                  rows={3}
                  className="bg-gray-100 p-2 rounded-md text-black"
                />
              </div>
            </ul>
            <div className="flex gap-1 mb-4">
              <p>
                উপরের সকল নিয়ম আমি{' '}
                <input
                  type="text"
                  className="bg-gray-100 p-2 rounded-md text-black"
                  onChange={(event) => setAgreementName(event.target.value)}
                />{' '}
                (নাম) বুঝতে পেরেছি এবং মানতে রাজি আছি।
              </p>
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="bg-gray-100 p-2 rounded-md text-black"
                onChange={(event) => setSignatureName(event.target.value)}
              />
              <p>তোমার স্বাক্ষর</p>
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="bg-gray-100 p-2 rounded-md text-black"
                onChange={(event) => setDate(event.target.value)}
              />
              <p>তারিখ</p>
            </div>
          </div>
          <button
            onClick={() => saveForm()}
            className="bg-green-500 p-4 mb-4 flex items-center justify-center h-16 rounded-lg hover:bg-green-600 duration-300"
          >
            <span>Submit</span>
          </button>
        </>
      )}
    </div>
  );
}
