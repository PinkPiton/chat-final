import "./styles/index.css";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
  NextUIProvider,
} from "@nextui-org/react";

function App() {
  let users = [
    {
      id: "1",
      name: "Illarion",
      age: 10,
    },

    {
      id: "2",
      name: "Israfil",
      age: 8,
    },

    {
      id: "3",
      name: "Aslan",
      age: 1,
    },

    {
      id: "4",
      name: "Alina",
      age: 14,
      hobbies: ["Footbal", "Games", "Walking", "Reading"],
    },
  ];
  localStorage.setItem("users", JSON.stringify(users));
  const localStorageUsersJSON = localStorage.getItem("users");
  const localStorageUsersJS = JSON.parse(localStorageUsersJSON);

  return (
    <div>
      {localStorageUsersJS.map((element) => (
        <div style={{ margin: "2rem" }}>
          <div>
            <span>name={element.name} </span>
          </div>
          <div>
            <span>age={element.age}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

const UserCard = ({ name, age, ...props }) => (
  <Card className="max-w-[400px]">
    <CardHeader className="flex gap-3">
      <Image
        alt="nextui logo"
        height={40}
        radius="sm"
        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
        width={40}
      />
      <div className="flex flex-col">
        <p className="text-md">{name}</p>
      </div>
    </CardHeader>
    <Divider />
    <CardBody>
      <p className="text-small text-default-500">{age}</p>
    </CardBody>
    <Divider />
    <CardFooter>
      <Link
        isExternal
        showAnchorIcon
        href="https://github.com/nextui-org/nextui"
      >
        Aslan loh
      </Link>
    </CardFooter>
  </Card>
);

export default App;
