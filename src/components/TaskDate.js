import React from 'react';
import moment from 'moment';
import { FaSun, FaRegPaperPlane, FaSpaceShuttle } from 'react-icons/fa';

export const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate }) => {
  return (
    showTaskDate && (
      <div className='task-date' data-testid='task-date-overlay'>
        <ul className='task-date__list'>
          <li>
            <div
              data-testid='task-date-today'
              aria-label='Select today as the task date'
              onClick={() => {
                setShowTaskDate(false);
                setTaskDate(moment().format('DD/MM/YYYY'));
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setShowTaskDate(false);
                  setTaskDate(moment().format('DD/MM/YYYY'));
                }
              }}
              role='button'
              tabIndex={0}
            >
              <span>
                <FaSpaceShuttle />
              </span>
              <span>Today</span>
            </div>
          </li>
          <li>
            <div
              data-testid='task-date-tomorrow'
              aria-label='Select tomorrow as the task date'
              onClick={() => {
                setShowTaskDate(false);
                setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setShowTaskDate(false);
                  setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
                }
              }}
              role='button'
              tabIndex={0}
            >
              <span>
                <FaSun />
              </span>
              <span>Tommorow</span>
            </div>
          </li>
          <li>
            <div
              data-testid='task-date-next-week'
              aria-label='Select upcoming as the task date'
              onClick={() => {
                setShowTaskDate(false);
                setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'));
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setShowTaskDate(false);
                  setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'));
                }
              }}
              role='button'
              tabIndex={0}
            >
              <span>
                <FaRegPaperPlane />
              </span>
              <span>Upcoming</span>
            </div>
          </li>
        </ul>
      </div>
    )
  );
};
