import React, { useState } from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { AddTask } from '../AddTask';

export const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  return (
    <header className='header' data-testid='header'>
      <nav>
        <div
          className='logo'
          style={{ color: '#fff', display: 'flex', alignItems: 'center' }}
        >
          <img src='/images/logo.png' alt='Todoist' />
          <span style={{ marginLeft: '15px' }}>quicktasks</span>
        </div>
        <div className='settings'>
          <ul>
            <li className='settings__add'>
              <button
                data-testid='quick-add-task-action'
                aria-label='Quick add task'
                onClick={() => setShowQuickAddTask(true)}
                type='button'
              >
                +
              </button>
            </li>
            <li className='settings__darkmode'>
              <button
                data-testid='dark-mode-action'
                aria-label='Darkmode on/off'
                type='button'
                onClick={() => setDarkMode(!darkMode)}
              >
                <FaPizzaSlice />
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
};
