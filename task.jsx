import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const MARGIN_PADDING = 10;
const BORDER = 1;
const RADIUS = 2;
const SIZE = 20;

const Container = styled.div`
  margin-bottom: ${MARGIN_PADDING}px;
  border: ${BORDER}px solid lightgrey;
  border-radius: ${RADIUS}px;
  padding: ${MARGIN_PADDING}px;
  background-color: green;

  display: flex;
`;

const Handle = styled.div`
  width: ${SIZE}px;
  height: ${SIZE}px;
  background-color: red;
  border-radius: ${RADIUS}px;
  margin-right: ${MARGIN_PADDING}px;
`;

export default class Task extends React.Component {
  render(){
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {provided => (
          <Container
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <Handle {...provided.dragHandleProps} />
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}