import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CompanyInfo`.
 */
export type CompanyInfoProps = SliceComponentProps<Content.CompanyInfoSlice>;

/**
 * Component for "CompanyInfo" Slices.
 */
const CompanyInfo = ({ slice }: CompanyInfoProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for company_info (variation: {slice.variation})
      Slices
    </section>
  );
};

export default CompanyInfo;
