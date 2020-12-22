import React from 'react'
import { Popup, Menu, Icon } from 'semantic-ui-react'

const tasks = [
    {
        id: 1,
        name: '1. General Introduction',
        shorten: '1. General Introduction',
        completed: true
    },
    {
        id: 2,
        name: '2. Describe your Job Description?',
        shorten: '2. Describe your Job Description?',
        completed: true
    },
    {
        id: 3,
        name: '3. Illustrate the main processes of your job from an input, throughput, output and collaboration point of view.',
        shorten: '3. Illustrate the main processes of your job...',
        completed: true
    },
    {
        id: 4,
        name: '4. Choose a particular aspect, assignment or project of your job where it is possible to bring about improvement or innovation on your job.',
        shorten: '4. Choose a particular aspect, assignment...',
        completed: true
    },
    {
        id: 5,
        name: '5. What is the improvement or innovation you want to bring about in your job?',
        shorten: '5. What is the improvement or innovation...',
        completed: true
    },
    {
        id: 6,
        name: '6. Use lean management such as a Fish-Bone Diagrams to elaborate on the issues surrounding the problem.',
        shorten: '6. Use lean management such as a Fish-Bone...',
        completed: true
    },
    {
        id: 7,
        name: '7. Who are the main actors or people that are involved in the improvement or innovation exercise?',
        shorten: '7. Who are the main actors or people that...',
        completed: true
    },
    {
        id: 8,
        name: '8. Report on how each of these actors define the innovation exercise.',
        shorten: '8. Report on how each of these actors define...',
        completed: true
    },
    {
        id: 9,
        name: '9. Empathise and search for solutions.',
        shorten: '9. Empathise and search for solutions.',
        completed: true
    },
    {
        id: 10,
        name: '10. Assess the risks to implement the recommended solutions.',
        shorten: '10. Assess the risks to implement the...',
        completed: true
    },
    {
        id: 11,
        name: '11. Evaluate the success of your initiative.',
        shorten: '11. Evaluate the success of your initiative.',
        completed: true
    },
]

const PopupTask = (props) => (
    <>
        {tasks.map((task) => (
            <Popup
                content={task.name}
                key={task.id}
                size={"tiny"}
                trigger={
                    <Menu.Item
                        name={task.id}
                        active={props.activeItem === task.id}
                        onClick={props.handleItemClick}>
                        {props.activeItem === task.id ? task.shorten : task.id}
                        {task.completed
                            ? <Icon name='check' color='green' style={{ marginLeft: '3px' }} />
                            : <Icon name='none' color='green' style={{ marginLeft: '3px' }} />
                        }
                    </Menu.Item>
                }
            />
        ))}
    </>
)

export default PopupTask




