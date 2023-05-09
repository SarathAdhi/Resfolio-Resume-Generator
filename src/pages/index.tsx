import PageLayout from "@layouts/PageLayout";
import { Button } from "rsuite";

export default function Home() {
  return (
    <PageLayout>
      <div>Hello</div>

      <Button appearance="primary" size="lg">
        Click
      </Button>
    </PageLayout>
  );
}
