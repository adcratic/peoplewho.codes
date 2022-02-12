import React, {useState} from 'react'
import "./Tabs.css"

const Tabs = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

    return (
        <div className='container'>
          {/* Tab Links */}
          <div className="button-container">
            <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}>New to coding</button>

            <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}>Intermediate</button>

            <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}>Expert</button>
          </div>

          {/* Tab content */}
          <div className='.content-tabs'>
            <div className={toggleState === 1 ? "content  active-content" : "content"}>
              <p>
                Welcome to the community - we're excited you're here!
                Design is a vast yet closely-knit community, and we want you to experience the very best of it. PeopleWho.Design is your platform to ask questions without hesitations, learn new things every day and make friends with a tonne of people who design.
                <br /><br/>
                It's also an opportunity to interact with a lot of industry leaders and get mentorship from them.<br/>
                It is a long journey ahead - and we're with you in it.
              </p>
            </div>

            <div className={toggleState === 2 ? "content  active-content" : "content"}>
              <p>
                Welcome to the community - we're excited you're here!
                Design is a vast yet closely-knit community, and we want you to experience the very best of it. PeopleWho.Design is your platform to ask questions without hesitations, learn new things every day and make friends with a tonne of people who design.
              </p>
            </div>

            <div className={toggleState === 3 ? "content  active-content" : "content"}>
              <p>
                Welcome to the community - we're excited you're here! Welcome to the community - we're excited you're here!
                Welcome to the community - we're excited you're here!Welcome to the community - we're excited you're here!
              </p>
            </div>
          </div>
        </div>
    )
}

export default Tabs
