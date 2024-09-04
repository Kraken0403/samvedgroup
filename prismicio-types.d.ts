// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type ProjectPageDocumentDataSlicesSlice = ProjectIntroSlice | ProjectHeroSlice;

/**
 * Content for Project page documents
 */
interface ProjectPageDocumentData {
  /**
   * Slice Zone field in *Project page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: project_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectPageDocumentDataSlicesSlice> /**
   * Meta Title field in *Project page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: project_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Project page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: project_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Project page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Project page document from Prismic
 *
 * - **API ID**: `project_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectPageDocumentData>,
    "project_page",
    Lang
  >;

export type AllDocumentTypes = ProjectPageDocument;

/**
 * Item in *ProjectHero → Default → Primary → Project Tags*
 */
export interface ProjectHeroSliceDefaultPrimaryProjectTagsItem {
  /**
   * Title field in *ProjectHero → Default → Primary → Project Tags*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_hero.default.primary.project_tags[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Tag field in *ProjectHero → Default → Primary → Project Tags*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_hero.default.primary.project_tags[].tag
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tag: prismic.KeyTextField;
}

/**
 * Primary content in *ProjectHero → Default → Primary*
 */
export interface ProjectHeroSliceDefaultPrimary {
  /**
   * Project Title field in *ProjectHero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_hero.default.primary.project_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  project_title: prismic.KeyTextField;

  /**
   * Caption field in *ProjectHero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_hero.default.primary.caption
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  caption: prismic.KeyTextField;

  /**
   * Project Hero Image field in *ProjectHero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project_hero.default.primary.project_hero_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  project_hero_image: prismic.ImageField<never>;

  /**
   * Project Tags field in *ProjectHero → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: project_hero.default.primary.project_tags[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  project_tags: prismic.GroupField<
    Simplify<ProjectHeroSliceDefaultPrimaryProjectTagsItem>
  >;

  /**
   * Color field in *ProjectHero → Default → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: project_hero.default.primary.color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  color: prismic.ColorField;
}

/**
 * Default variation for ProjectHero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectHeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProjectHeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ProjectHero*
 */
type ProjectHeroSliceVariation = ProjectHeroSliceDefault;

/**
 * ProjectHero Shared Slice
 *
 * - **API ID**: `project_hero`
 * - **Description**: ProjectHero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectHeroSlice = prismic.SharedSlice<
  "project_hero",
  ProjectHeroSliceVariation
>;

/**
 * Item in *ProjectIntro → Default → Primary → Project Images*
 */
export interface ProjectIntroSliceDefaultPrimaryProjectImagesItem {
  /**
   * Project Image field in *ProjectIntro → Default → Primary → Project Images*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project_intro.default.primary.project_images[].project_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  project_image: prismic.ImageField<never>;
}

/**
 * Item in *ProjectIntro → Default → Primary → Features*
 */
export interface ProjectIntroSliceDefaultPrimaryFeaturesItem {
  /**
   * Feature Title field in *ProjectIntro → Default → Primary → Features*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_intro.default.primary.features[].feature_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  feature_title: prismic.KeyTextField;

  /**
   * Feature Detail field in *ProjectIntro → Default → Primary → Features*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_intro.default.primary.features[].feature_detail
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  feature_detail: prismic.KeyTextField;
}

/**
 * Primary content in *ProjectIntro → Default → Primary*
 */
export interface ProjectIntroSliceDefaultPrimary {
  /**
   * Intro Para one field in *ProjectIntro → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_intro.default.primary.intro_para_one
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  intro_para_one: prismic.KeyTextField;

  /**
   * Intro Para two field in *ProjectIntro → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_intro.default.primary.intro_para_two
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  intro_para_two: prismic.KeyTextField;

  /**
   * Portrait Image One field in *ProjectIntro → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project_intro.default.primary.portrait_image_one
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  portrait_image_one: prismic.ImageField<never>;

  /**
   * Project Images field in *ProjectIntro → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: project_intro.default.primary.project_images[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  project_images: prismic.GroupField<
    Simplify<ProjectIntroSliceDefaultPrimaryProjectImagesItem>
  >;

  /**
   * Features field in *ProjectIntro → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: project_intro.default.primary.features[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  features: prismic.GroupField<
    Simplify<ProjectIntroSliceDefaultPrimaryFeaturesItem>
  >;

  /**
   * Next Project Link field in *ProjectIntro → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: project_intro.default.primary.next_project_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  next_project_link: prismic.LinkField;

  /**
   * Previous Project Link field in *ProjectIntro → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: project_intro.default.primary.previous_project_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  previous_project_link: prismic.LinkField;

  /**
   * Color field in *ProjectIntro → Default → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: project_intro.default.primary.color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  color: prismic.ColorField;

  /**
   * Video Link field in *ProjectIntro → Default → Primary*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: project_intro.default.primary.video_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  video_link: prismic.LinkToMediaField;

  /**
   * Project Vision field in *ProjectIntro → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_intro.default.primary.project_vision
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  project_vision: prismic.RichTextField;
}

/**
 * Default variation for ProjectIntro Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectIntroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProjectIntroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ProjectIntro*
 */
type ProjectIntroSliceVariation = ProjectIntroSliceDefault;

/**
 * ProjectIntro Shared Slice
 *
 * - **API ID**: `project_intro`
 * - **Description**: ProjectIntro
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectIntroSlice = prismic.SharedSlice<
  "project_intro",
  ProjectIntroSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ProjectPageDocument,
      ProjectPageDocumentData,
      ProjectPageDocumentDataSlicesSlice,
      AllDocumentTypes,
      ProjectHeroSlice,
      ProjectHeroSliceDefaultPrimaryProjectTagsItem,
      ProjectHeroSliceDefaultPrimary,
      ProjectHeroSliceVariation,
      ProjectHeroSliceDefault,
      ProjectIntroSlice,
      ProjectIntroSliceDefaultPrimaryProjectImagesItem,
      ProjectIntroSliceDefaultPrimaryFeaturesItem,
      ProjectIntroSliceDefaultPrimary,
      ProjectIntroSliceVariation,
      ProjectIntroSliceDefault,
    };
  }
}
