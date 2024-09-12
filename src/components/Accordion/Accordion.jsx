import React, { useState } from 'react';

const Accordion = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index); // Close if it's already open, else open it
    };

    return (
        <>
            <div>
                <button
                    onClick={() => toggleAccordion(1)}
                    className="bg-red-500 rounded-md text-xl p-4"
                >
                    Click to {activeAccordion === 1 ? <span>Hide</span> : <span>Show</span>}
                </button>
                {activeAccordion === 1 && (
                    <p className="text-3xl text-green-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum, erat in eleifend porta, augue magna dictum nisi, vitae vulputate massa est in augue. In hac habitasse platea dictumst. Nulla facilisi. Sed nec magna ut erat mollis malesuada. Sed vitae erat in lorem commodo faucibus. Nunc sed nisi eget lectus convallis tincidunt. Sed quis nulla et nunc euismod malesuada.
                    </p>
                )}
            </div>

            <br />
            <br />
            <br />

            <div>
                <button
                    onClick={() => toggleAccordion(2)}
                    className="bg-red-500 rounded-md text-xl p-4"
                >
                    Click to {activeAccordion === 2 ? <span>Hide para 2</span> : <span>Show para 2</span>}
                </button>
                {activeAccordion === 2 && (
                    <p className="text-3xl text-green-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum, erat in eleifend porta, augue magna dictum nisi, vitae vulputate massa est in augue. In hac habitasse platea dictumst. Nulla facilisi. Sed nec magna ut erat mollis malesuada. Sed vitae erat in lorem commodo faucibus. Nunc sed nisi eget lectus convallis tincidunt. Sed quis nulla et nunc euismod malesuada.
                    </p>
                )}
            </div>
        </>
    );
};

export default Accordion;
