import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import 'tailwindcss/tailwind.css';

const Blog: React.FC = () => {

    const author = 'Gagandeep Singh'
    const heading = 'Optional class in Java?'
    const introduction = [
        `The Optional class in Java is used to represent a value that might be present or absent, essentially
        providing a container object which may or may not contain a non-null value. Here’s why it's useful:`,

        `Avoid NullPointerExceptions: It helps to avoid NullPointerExceptions by explicitly indicating the potential
        absence of a value. Instead of returning null from a method, you return an Optional, which makes the absence
        of a value explicit and encourages checking.`,

        `Better API Design: It makes API design cleaner and more expressive. By returning an Optional, you signal to
        the caller that the value might be absent and that they need to handle this case.`,

         `Encourages Functional Programming: Optional supports functional programming techniques such as mapping,
         filtering, and chaining operations, which can lead to more readable and concise code.`,

         `Reduces Boilerplate Code: It reduces boilerplate code that’s often required to check for null and handle
         default values.`,

         `Improves Readability: Code using Optional can be more readable and self-documenting, as it makes the
         possibility of absence explicit.`
    ];
    const lastUpdated = 'Last updated: August 31, 2024'

    const javaCode = `
import java.util.Optional;

public class OptionalExample {
    public static void main(String[] args) {
        Optional<String> optionalValue = getOptionalValue(true);

        // Using ifPresent to handle the case where the value is present
        optionalValue.ifPresent(value -> System.out.println("Value is: " + value));

        // Using orElse to provide a default value when the optional is empty
        String value = optionalValue.orElse("Default Value");
        System.out.println("Value or default: " + value);
    }

    public static Optional<String> getOptionalValue(boolean isPresent) {
        if (isPresent) {
            return Optional.of("Actual Value");
        } else {
            return Optional.empty();
        }
    }
}
    `;

    return (
        <div className="min-h-screen text-[#000000] p-6 lg:p-8">
            <div className="container mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">

                {/* Article Section */}
                <div className="flex-1 bg-transparent p-6 lg:p-8 rounded-lg">

                    <h1 className="text-4xl lg:text-5xl font-bold mb-6 lg:mb-8 head-txt">{heading}</h1>
                    <div className="last-updated text-sm -mt-5 ml-1 updates">{lastUpdated}</div>

                    {/* Rounded Banner with Image, hidden on small screens
                    <div className="relative rounded-lg overflow-hidden mb-12 hidden md:block mt-10">
                        <img
                            src="https://via.placeholder.com/1200x400"
                            alt="Banner Image"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                    */}

                    {/* Writer Info Section */}
                    <div className="flex items-center mb-6 mt-10">
                        <img
                            src="https://via.placeholder.com/60"
                            alt="Author"
                            className="w-16 h-16 object-cover rounded-full mr-4"
                        />
                        <div className="border-l-4 border-[#F78764] pl-5">
                            <p className="text-base font-bold highlighter">Written By:</p>
                            <p className="text-base text-[#F4F4F6]">{author}</p>
                        </div>
                    </div>

                    <div className="mt-14">
                        {introduction.map((item, index) => (
                            <p key={index} className="text-base lg:text-lg mb-6 lg:mb-8 leading-relaxed text-[#F4F4F6]">
                                {item}
                            </p>
                        ))}
                    </div>

                    <h2 className="text-xl lg:text-2xl font-bold mt-8 lg:mt-12 mb-4 lg:mb-6 head-txt">
                        Here’s a simple example of how Optional can be used
                    </h2>
                    <div className="mt-10">
                        <SyntaxHighlighter language="java" style={oneDark} className="rounded-lg">
                            {javaCode}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
