import React from 'react'

const Faqs = () => {
  return (
    <section id="faqs" className="bg-secondary-100 p-10">
      <h2 className="text-3xl md:text-4xl leading-7 text-white uppercase font-heading">
        FAQS
      </h2>
      <div className="flex items-center justify-center">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8 space-y-2">
          <p className="text-base md:text-lg font-semibold text-center mb-8 text-primary font-body ">
            Frequently Asked Questions
          </p>

          <div className="space-y-4 flex flex-col items-center">
            <details className="w-full md:w-1/2 rounded-lg ring-1 ring-secondary-50 bg-secondary-50 font-body">
              <summary className="px-4 py-6 text-primary text-sm md:text-base">
                How do I choose a coach that's right for me?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-grey-50 text-sm md:text-base">
                You can view the profiles of available coaches and choose based
                on their experience, certifications, and specialities. You can
                also read reviews and ratings from other users to make an
                informed decision.
              </p>
            </details>
            <details className="w-full md:w-1/2 rounded-lg ring-1 ring-secondary-50 bg-secondary-50 font-body">
              <summary className="px-4 py-6 text-primary text-sm md:text-base">
                What kind of support can I expect from my coach?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-grey-50 text-sm md:text-base">
                Your coach will provide you with customized workout plans,
                nutrition advice, and ongoing support to help you reach your
                fitness goals. You can communicate with your coach as often as
                you like to receive additional support.
              </p>
            </details>
            <details className="w-full md:w-1/2 rounded-lg ring-1 ring-secondary-50 bg-secondary-50 font-body">
              <summary className="px-4 py-6 text-primary text-sm md:text-base">
                What are the requirements to become a coach on this platform?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-grey-50 text-sm md:text-base">
                To become a coach on our platform, you must be a certified
                fitness or nutrition professional with experience in the
                industry.
              </p>
            </details>
            <details className="w-full md:w-1/2 rounded-lg ring-1 ring-secondary-50 bg-secondary-50 font-body">
              <summary className="px-4 py-6 text-primary text-sm md:text-base">
                How do I get started as a coach?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-grey-50 text-sm md:text-base">
                To get started as a coach, simply register on our platform and
                complete your profile. You can start connecting with potential
                clients right away.
              </p>
            </details>
            <details className="w-full md:w-1/2 rounded-lg ring-1 ring-secondary-50 bg-secondary-50 font-body">
              <summary className="px-4 py-6 text-primary text-sm md:text-base">
                How do I get paid as a coach?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-grey-50 text-sm md:text-base">
                Coaches are paid based on the services they provide to clients.
                The exact payment structure will depend on your specific
                services and the payment plan you choose.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs