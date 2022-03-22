export const List = () => {
  const List = [
    {
      value: "value1"
    },
    {
      value: "value2"
    },
    {
      value: "value3"
    },
    {
      value: "value4"
    },
    {
      value: "value5"
    }
  ];
  return (
    <>
      {List.map((item, index) => {
        return <ul key={index}>{item.value}</ul>;
      })}
    </>
  );
};
