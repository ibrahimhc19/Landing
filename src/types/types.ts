export interface ILinks  {
    linkTitle: string;
    linkRef: string
  }

export interface IHeaderProps {
  title: string;
  links: ILinks[];
}