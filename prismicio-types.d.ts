// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client'

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] }

type AboutUsDocumentDataSlicesSlice = CarouselSlice

/**
 * Content for About us documents
 */
interface AboutUsDocumentData {
  /**
   * Title field in *About us*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * Paragraph field in *About us*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us.paragraph
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  paragraph: prismic.KeyTextField

  /**
   * Image field in *About us*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>

  /**
   * Slice Zone field in *About us*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AboutUsDocumentDataSlicesSlice>
  /**
   * Meta Description field in *About us*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: about_us.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *About us*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>

  /**
   * Meta Title field in *About us*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: about_us.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField
}

/**
 * About us document from Prismic
 *
 * - **API ID**: `about_us`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutUsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<AboutUsDocumentData>,
    'about_us',
    Lang
  >

/**
 * Content for Contact documents
 */
interface ContactDocumentData {
  /**
   * Email paragraph field in *Contact*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.email_paragraph
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email_paragraph: prismic.KeyTextField

  /**
   * Email field in *Contact*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.email
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField

  /**
   * Location paragraph field in *Contact*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.location_paragraph
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  location_paragraph: prismic.KeyTextField

  /**
   * Location field in *Contact*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.location
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  location: prismic.KeyTextField

  /**
   * Phone paragraph field in *Contact*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.phone_paragraph
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  phone_paragraph: prismic.KeyTextField

  /**
   * Phone number field in *Contact*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.phone_number
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  phone_number: prismic.KeyTextField
}

/**
 * Contact document from Prismic
 *
 * - **API ID**: `contact`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ContactDocumentData>,
    'contact',
    Lang
  >

/**
 * Item in *Footer → Link group 1*
 */
export interface FooterDocumentDataLinkGroup1Item {
  /**
   * Link name field in *Footer → Link group 1*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link_group_1[].link_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_name: prismic.KeyTextField

  /**
   * Link field in *Footer → Link group 1*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link_group_1[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Item in *Footer → Link group 2*
 */
export interface FooterDocumentDataLinkGroup2Item {
  /**
   * Link name field in *Footer → Link group 2*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link_group_2[].link_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_name: prismic.KeyTextField

  /**
   * Link field in *Footer → Link group 2*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link_group_2[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Item in *Footer → Link group 3*
 */
export interface FooterDocumentDataLinkGroup3Item {
  /**
   * Link name field in *Footer → Link group 3*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link_group_3[].link_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_name: prismic.KeyTextField

  /**
   * Link field in *Footer → Link group 3*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link_group_3[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Item in *Footer → Link group 4*
 */
export interface FooterDocumentDataLinkGroup4Item {
  /**
   * Link name field in *Footer → Link group 4*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link_group_4[].link_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_name: prismic.KeyTextField

  /**
   * Link field in *Footer → Link group 4*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link_group_4[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Link group 1 title field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link_group_1_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_group_1_title: prismic.KeyTextField

  /**
   * Link group 1 field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link_group_1[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  link_group_1: prismic.GroupField<Simplify<FooterDocumentDataLinkGroup1Item>>

  /**
   * Link group 2 title field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link_group_2_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_group_2_title: prismic.KeyTextField

  /**
   * Link group 2 field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link_group_2[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  link_group_2: prismic.GroupField<Simplify<FooterDocumentDataLinkGroup2Item>>

  /**
   * Link group 3 title field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link_group_3_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_group_3_title: prismic.KeyTextField

  /**
   * Link group 3 field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link_group_3[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  link_group_3: prismic.GroupField<Simplify<FooterDocumentDataLinkGroup3Item>>

  /**
   * Link group 4 title field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link_group_4_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_group_4_title: prismic.KeyTextField

  /**
   * Link group 4 field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link_group_4[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  link_group_4: prismic.GroupField<Simplify<FooterDocumentDataLinkGroup4Item>>

  /**
   * Company address field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.company_address
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  company_address: prismic.KeyTextField

  /**
   * Company SSD number field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.company_ssd_number
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  company_ssd_number: prismic.KeyTextField

  /**
   * Company email field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.company_email
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  company_email: prismic.KeyTextField

  /**
   * Company phone number field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.company_phone_number
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  company_phone_number: prismic.KeyTextField
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    'footer',
    Lang
  >

type FrontPageDocumentDataSlicesSlice =
  | CompanyInfoSlice
  | ServiceOverviewSlice
  | NewsSlice

/**
 * Content for front_page documents
 */
interface FrontPageDocumentData {
  /**
   * Hero Image field in *front_page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: front_page.hero_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero_image: prismic.ImageField<never>

  /**
   * Hero Text field in *front_page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: front_page.hero_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  hero_text: prismic.KeyTextField

  /**
   * First Link field in *front_page*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: front_page.first_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  first_link: prismic.LinkField

  /**
   * First Link Text field in *front_page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: front_page.first_link_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  first_link_text: prismic.KeyTextField

  /**
   * Second Link field in *front_page*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: front_page.second_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  second_link: prismic.LinkField

  /**
   * Second Link Text field in *front_page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: front_page.second_link_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  second_link_text: prismic.KeyTextField

  /**
   * Slice Zone field in *front_page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: front_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<FrontPageDocumentDataSlicesSlice>
  /**
   * Meta Description field in *front_page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: front_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *front_page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: front_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>

  /**
   * Meta Title field in *front_page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: front_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField
}

/**
 * front_page document from Prismic
 *
 * - **API ID**: `front_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FrontPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FrontPageDocumentData>,
    'front_page',
    Lang
  >

/**
 * Item in *Header → Link group 1*
 */
export interface HeaderDocumentDataLinkGroup1Item {
  /**
   * Link Name field in *Header → Link group 1*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.link_group_1[].link_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_name: prismic.KeyTextField

  /**
   * link field in *Header → Link group 1*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.link_group_1[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Item in *Header → Link group 2*
 */
export interface HeaderDocumentDataLinkGroup2Item {
  /**
   * Link Name field in *Header → Link group 2*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.link_group_2[].link_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_name: prismic.KeyTextField

  /**
   * link field in *Header → Link group 2*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.link_group_2[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Item in *Header → Link group 3*
 */
export interface HeaderDocumentDataLinkGroup3Item {
  /**
   * Link Name field in *Header → Link group 3*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.link_group_3[].link_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_name: prismic.KeyTextField

  /**
   * Link field in *Header → Link group 3*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.link_group_3[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Content for Header documents
 */
interface HeaderDocumentData {
  /**
   * First link text field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.first_link_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  first_link_text: prismic.KeyTextField

  /**
   * First Link field in *Header*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.first_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  first_link: prismic.LinkField

  /**
   * Link group 1 title field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.link_group_1_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_group_1_title: prismic.KeyTextField

  /**
   * Link group 1 field in *Header*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: header.link_group_1[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  link_group_1: prismic.GroupField<Simplify<HeaderDocumentDataLinkGroup1Item>>

  /**
   * Link group 2 title field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.link_group_2_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_group_2_title: prismic.KeyTextField

  /**
   * Link group 2 field in *Header*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: header.link_group_2[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  link_group_2: prismic.GroupField<Simplify<HeaderDocumentDataLinkGroup2Item>>

  /**
   * Link group 3 title field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.link_group_3_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_group_3_title: prismic.KeyTextField

  /**
   * Link group 3 field in *Header*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: header.link_group_3[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  link_group_3: prismic.GroupField<Simplify<HeaderDocumentDataLinkGroup3Item>>

  /**
   * Scroll to section id field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.scroll_to_section_id
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  scroll_to_section_id: prismic.KeyTextField

  /**
   * Scroll to section text field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.scroll_to_section_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  scroll_to_section_text: prismic.KeyTextField

  /**
   * Button Text field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.button_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField

  /**
   * Button Link field in *Header*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.button_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField
}

/**
 * Header document from Prismic
 *
 * - **API ID**: `header`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HeaderDocumentData>,
    'header',
    Lang
  >

export type AllDocumentTypes =
  | AboutUsDocument
  | ContactDocument
  | FooterDocument
  | FrontPageDocument
  | HeaderDocument

/**
 * Primary content in *Carousel → Primary*
 */
export interface CarouselSliceDefaultPrimary {
  /**
   * Title field in *Carousel → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * Paragraph field in *Carousel → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  paragraph: prismic.KeyTextField
}

/**
 * Primary content in *Carousel → Items*
 */
export interface CarouselSliceDefaultItem {
  /**
   * Image field in *Carousel → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>
}

/**
 * Default variation for Carousel Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CarouselSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<CarouselSliceDefaultPrimary>,
  Simplify<CarouselSliceDefaultItem>
>

/**
 * Slice variation for *Carousel*
 */
type CarouselSliceVariation = CarouselSliceDefault

/**
 * Carousel Shared Slice
 *
 * - **API ID**: `carousel`
 * - **Description**: Carousel
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CarouselSlice = prismic.SharedSlice<
  'carousel',
  CarouselSliceVariation
>

/**
 * Primary content in *CompanyInfo → Primary*
 */
export interface CompanyInfoSliceDefaultPrimary {
  /**
   * Title field in *CompanyInfo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: company_info.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * Paragraph field in *CompanyInfo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: company_info.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  paragraph: prismic.KeyTextField

  /**
   * Button text field in *CompanyInfo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: company_info.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField

  /**
   * Button link field in *CompanyInfo → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: company_info.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField

  /**
   * First image field in *CompanyInfo → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: company_info.primary.first_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  first_image: prismic.ImageField<never>

  /**
   * Second image field in *CompanyInfo → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: company_info.primary.second_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  second_image: prismic.ImageField<never>

  /**
   * Third image field in *CompanyInfo → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: company_info.primary.third_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  third_image: prismic.ImageField<never>
}

/**
 * Default variation for CompanyInfo Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CompanyInfoSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<CompanyInfoSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *CompanyInfo*
 */
type CompanyInfoSliceVariation = CompanyInfoSliceDefault

/**
 * CompanyInfo Shared Slice
 *
 * - **API ID**: `company_info`
 * - **Description**: CompanyInfo
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CompanyInfoSlice = prismic.SharedSlice<
  'company_info',
  CompanyInfoSliceVariation
>

/**
 * Primary content in *News → Primary*
 */
export interface NewsSliceDefaultPrimary {
  /**
   * Title field in *News → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: news.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField
}

/**
 * Primary content in *News → Items*
 */
export interface NewsSliceDefaultItem {
  /**
   * Image field in *News → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: news.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>

  /**
   * Title field in *News → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: news.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * Paragraph field in *News → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: news.items[].paragraph
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  paragraph: prismic.KeyTextField

  /**
   * Link text field in *News → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: news.items[].link_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_text: prismic.KeyTextField

  /**
   * Link field in *News → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: news.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Default variation for News Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<NewsSliceDefaultPrimary>,
  Simplify<NewsSliceDefaultItem>
>

/**
 * Slice variation for *News*
 */
type NewsSliceVariation = NewsSliceDefault

/**
 * News Shared Slice
 *
 * - **API ID**: `news`
 * - **Description**: News
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsSlice = prismic.SharedSlice<'news', NewsSliceVariation>

/**
 * Primary content in *ServiceOverview → Primary*
 */
export interface ServiceOverviewSliceDefaultPrimary {
  /**
   * Title field in *ServiceOverview → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service_overview.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * Paragraph field in *ServiceOverview → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service_overview.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  paragraph: prismic.KeyTextField
}

/**
 * Primary content in *ServiceOverview → Items*
 */
export interface ServiceOverviewSliceDefaultItem {
  /**
   * Title field in *ServiceOverview → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service_overview.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * Paragraph field in *ServiceOverview → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service_overview.items[].paragraph
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  paragraph: prismic.KeyTextField

  /**
   * Link text field in *ServiceOverview → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service_overview.items[].link_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_text: prismic.KeyTextField

  /**
   * Link field in *ServiceOverview → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: service_overview.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Default variation for ServiceOverview Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServiceOverviewSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<ServiceOverviewSliceDefaultPrimary>,
  Simplify<ServiceOverviewSliceDefaultItem>
>

/**
 * Slice variation for *ServiceOverview*
 */
type ServiceOverviewSliceVariation = ServiceOverviewSliceDefault

/**
 * ServiceOverview Shared Slice
 *
 * - **API ID**: `service_overview`
 * - **Description**: ServiceOverview
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServiceOverviewSlice = prismic.SharedSlice<
  'service_overview',
  ServiceOverviewSliceVariation
>

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>
  }

  namespace Content {
    export type {
      AboutUsDocument,
      AboutUsDocumentData,
      ContactDocument,
      ContactDocumentData,
      FooterDocument,
      FooterDocumentData,
      FrontPageDocument,
      FrontPageDocumentData,
      HeaderDocument,
      HeaderDocumentData,
      AllDocumentTypes,
      CarouselSlice,
      CarouselSliceVariation,
      CarouselSliceDefault,
      CompanyInfoSlice,
      CompanyInfoSliceVariation,
      CompanyInfoSliceDefault,
      NewsSlice,
      NewsSliceVariation,
      NewsSliceDefault,
      ServiceOverviewSlice,
      ServiceOverviewSliceVariation,
      ServiceOverviewSliceDefault,
    }
  }
}
