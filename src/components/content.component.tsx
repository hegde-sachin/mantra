import { Content } from "@/interfaces/content";

interface ContentComponentProps {
  contents: Array<Content>;
}

export const ContentComponent = ({ contents }: ContentComponentProps) => {
  return (
    <div className="flex flex-col gap-4">
      {contents.map((content, index) => (
        <div key={index} className="flex flex-col gap-2">
          <h2 className="font-medium text-large lg:text-xLarge">
            {content.title}
          </h2>
          <div className="flex flex-col gap-4 pl-4">
            {content.details.map((detail, index) => {
              if (detail.paragraph) {
                return (
                  <p key={index} className="text-base">
                    {detail.paragraph}
                  </p>
                );
              } else if (detail.list) {
                return (
                  <ul key={index} className="text-base">
                    {detail.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                );
              }
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
