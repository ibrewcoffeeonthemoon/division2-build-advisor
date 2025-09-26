import { Button } from "@/components/ui/button";

function Bottom() {
  return (
    <nav className="border-b" id="nav">
      <div className="flex justify-evenly h-16">
        <Button className="flex-1" variant="ghost">
          Build
        </Button>
        <Button className="flex-1" variant="ghost">
          Stats
        </Button>
        <Button className="flex-1" variant="ghost">
          Settings
        </Button>
      </div>
    </nav>
  );
}

export default Bottom;
