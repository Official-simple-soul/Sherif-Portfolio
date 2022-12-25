import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faSquareJs,
  faCss3,
  faHtml5,
  faBootstrap,
  faWordpress,
  faNode,
  faN,
  faDev,
  faPython
} from '@fortawesome/free-brands-svg-icons';

export default function Skill({ Animator, MoveIn, MoveOut }) {
  return (
    <div className="h-screen" id='skill'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          height: '100%',
        }}
        className="w-[80%]"
      >
        <span style={{ fontSize: '18px' }} className="text-textcolor text-4xl ">
          <Animator
            animation={MoveIn(-1000, 0)}
            className="shadow-lg shadow-[] pl-3 py-1 text-[#E56027] rounded-lg"
          >
            <FontAwesomeIcon icon={faHtml5} className="mr-1" />
            HTML
          </Animator>
          <Animator
            animation={MoveIn(1000, 0)}
            className="mt-8 shadow-lg shadow-[] pl-3 py-1 text-[#2EA3D5] rounded-lg"
          >
            <FontAwesomeIcon icon={faCss3} className="mr-1"/>
            CSS
          </Animator>
          <Animator
            animation={MoveIn(-1000, 0)}
            className="mt-8 shadow-lg shadow-[] pl-3 py-1 text-[#6D12EB] rounded-lg"
          >
            <FontAwesomeIcon icon={faBootstrap} className="mr-1"/>
            BOOTSTRAP
          </Animator>
          <Animator
            animation={MoveIn(1000, 0)}
            className="mt-8 shadow-lg shadow-[] pl-3 py-1 text-[#E5D04A] rounded-lg"
          >
            <FontAwesomeIcon icon={faSquareJs} className="mr-1"/>
            JAVASCRIPT
          </Animator>
          <Animator
            animation={MoveIn(-1000, 0)}
            className="mt-8 shadow-lg shadow-[] pl-3 py-1 text-[#47CAF2] rounded-lg"
          >
            <FontAwesomeIcon icon={faReact} className='mr-1'/>
            REACTJS
          </Animator>
          <Animator
            animation={MoveOut(1000, 0)}
            className="mt-8 shadow-lg shadow-[] pl-3 py-1 text-white rounded-lg"
          >
            <FontAwesomeIcon icon={faN} className='mr-1'/>
            NEXTJS
          </Animator>
          <Animator
            animation={MoveOut(-1000, 0)}
            className="mt-8 shadow-lg shadow-[] pl-3 py-1 text-[#206F93] rounded-lg"
          >
            <FontAwesomeIcon icon={faWordpress} className='mr-1'/>
            WORDPRESS
          </Animator>
          <Animator
            animation={MoveOut(1000, 0)}
            className="mt-8 shadow-lg shadow-[] pl-3 py-1 text-[#619756] rounded-lg"
          >
            <FontAwesomeIcon icon={faNode} className='mr-1'/>
            NODEJS
          </Animator>
        </span>
      </div>
    </div>
  );
}
