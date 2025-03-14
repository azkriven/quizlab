export default function FAQs() {
    return (
        <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
                    <div className="text-center lg:text-left">
                        <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
                            Frequently <br className="hidden lg:block" /> Asked <br className="hidden lg:block" />
                            Questions
                        </h2>
                        <p>Learn more about QuizLab.</p>
                    </div>

                    <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
                        <div className="pb-6">
                            <h3 className="font-medium">What is QuizLab?</h3>
                            <p className="text-muted-foreground mt-4">QuizLab is a platform for creating and sharing quizzes. You can use it to create quizzes for your students, employees, or friends.</p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">How do I create a quiz?</h3>
                            <p className="text-muted-foreground mt-4">You can create a quiz by logging into your account and clicking on the create quiz button.</p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">How do I share a quiz?</h3>
                            <p className="text-muted-foreground my-4">You can share a quiz by copying the link and sending it to your students, employees, or friends.</p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">Is QuizLab free?</h3>
                            <p className="text-muted-foreground mt-4">Yes, QuizLab is free to use. However, we offer a premium plan with additional features.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
