import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CreateList from "./create";
import ListDetails from "./details";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { dropCardCompleted } from "store/modules/list/actions";
import { Droppable } from "react-beautiful-dnd";
function List() {
  const listData = useSelector((state) => state.list.data);
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setList(listData);
  }, [listData]);
  const style = {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "100%",
    height: "90%",
    paddingRight: "1rem",
    overflow: "scroll hidden",
    scrollSnapType: "x mandatory",
    scrollPadding: "0px 1.25rem",
    scrollbarWidth: "none",
  };
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination, type } = result;
    let saveData = {
      sourceId: source.droppableId,
      destinationId: destination.droppableId,
      sourceIndex: source.index,
      destinationIndex: destination.index,
      type,
    };
    dispatch(dropCardCompleted(saveData));
    return;
  };
  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
      <Box sx={style}>
        <CreateList />
        <Droppable droppableId="lists" direction="horizontal" type="list">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex ml-5 gap-6 items-start"
            >
              {list.map((el, index) => {
                return (
                  <ListDetails
                    index={index}
                    id={el.id}
                    title={el.title}
                    key={el.id}
                    cards={el.cards}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </Box>
    </DragDropContext>
  );
}

export default List;
