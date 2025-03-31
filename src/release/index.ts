/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/release
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReleaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * The release assets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/release#assets Release#assets}
  */
  readonly assets?: ReleaseAssets;
  /**
  * The description of the release. You can use Markdown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/release#description Release#description}
  */
  readonly description?: string;
  /**
  * The title of each milestone the release is associated with. GitLab Premium customers can specify group milestones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/release#milestones Release#milestones}
  */
  readonly milestones?: string[];
  /**
  * The name of the release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/release#name Release#name}
  */
  readonly name?: string;
  /**
  * The ID or full path of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/release#project Release#project}
  */
  readonly project: string;
  /**
  * If a tag specified in tag_name doesn't exist, the release is created from ref and tagged with tag_name. It can be a commit SHA, another tag name, or a branch name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/release#ref Release#ref}
  */
  readonly ref?: string;
  /**
  * Date and time for the release. Defaults to the current time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). Only provide this field if creating an upcoming or historical release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/release#released_at Release#released_at}
  */
  readonly releasedAt?: string;
  /**
  * Message to use if creating a new annotated tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/release#tag_message Release#tag_message}
  */
  readonly tagMessage?: string;
  /**
  * The tag where the release is created from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/release#tag_name Release#tag_name}
  */
  readonly tagName: string;
}
export interface ReleaseAssets {
}

export function releaseAssetsToTerraform(struct?: ReleaseAssets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function releaseAssetsToHclTerraform(struct?: ReleaseAssets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ReleaseAssetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseAssets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseAssets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }
}
export interface ReleaseAuthor {
}

export function releaseAuthorToTerraform(struct?: ReleaseAuthor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function releaseAuthorToHclTerraform(struct?: ReleaseAuthor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ReleaseAuthorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseAuthor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseAuthor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // web_url - computed: true, optional: false, required: false
  public get webUrl() {
    return this.getStringAttribute('web_url');
  }
}
export interface ReleaseCommit {
}

export function releaseCommitToTerraform(struct?: ReleaseCommit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function releaseCommitToHclTerraform(struct?: ReleaseCommit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ReleaseCommitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseCommit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseCommit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // author_email - computed: true, optional: false, required: false
  public get authorEmail() {
    return this.getStringAttribute('author_email');
  }

  // author_name - computed: true, optional: false, required: false
  public get authorName() {
    return this.getStringAttribute('author_name');
  }

  // authored_date - computed: true, optional: false, required: false
  public get authoredDate() {
    return this.getStringAttribute('authored_date');
  }

  // committed_date - computed: true, optional: false, required: false
  public get committedDate() {
    return this.getStringAttribute('committed_date');
  }

  // committer_email - computed: true, optional: false, required: false
  public get committerEmail() {
    return this.getStringAttribute('committer_email');
  }

  // committer_name - computed: true, optional: false, required: false
  public get committerName() {
    return this.getStringAttribute('committer_name');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // parent_ids - computed: true, optional: false, required: false
  public get parentIds() {
    return cdktf.Fn.tolist(this.getListAttribute('parent_ids'));
  }

  // short_id - computed: true, optional: false, required: false
  public get shortId() {
    return this.getStringAttribute('short_id');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}
export interface ReleaseLinks {
}

export function releaseLinksToTerraform(struct?: ReleaseLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function releaseLinksToHclTerraform(struct?: ReleaseLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ReleaseLinksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // closed_issues_url - computed: true, optional: false, required: false
  public get closedIssuesUrl() {
    return this.getStringAttribute('closed_issues_url');
  }

  // closed_merge_requests_url - computed: true, optional: false, required: false
  public get closedMergeRequestsUrl() {
    return this.getStringAttribute('closed_merge_requests_url');
  }

  // edit_url - computed: true, optional: false, required: false
  public get editUrl() {
    return this.getStringAttribute('edit_url');
  }

  // merged_merge_requests_url - computed: true, optional: false, required: false
  public get mergedMergeRequestsUrl() {
    return this.getStringAttribute('merged_merge_requests_url');
  }

  // opened_issues_url - computed: true, optional: false, required: false
  public get openedIssuesUrl() {
    return this.getStringAttribute('opened_issues_url');
  }

  // opened_merge_requests_url - computed: true, optional: false, required: false
  public get openedMergeRequestsUrl() {
    return this.getStringAttribute('opened_merge_requests_url');
  }

  // self - computed: true, optional: false, required: false
  public get selfAttribute() {
    return this.getStringAttribute('self');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/release gitlab_release}
*/
export class Release extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_release";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Release resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Release to import
  * @param importFromId The id of the existing Release that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/release#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Release to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_release", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/release gitlab_release} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReleaseConfig
  */
  public constructor(scope: Construct, id: string, config: ReleaseConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_release',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '17.10.0',
        providerVersionConstraint: '~> 17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assets.internalValue = config.assets;
    this._description = config.description;
    this._milestones = config.milestones;
    this._name = config.name;
    this._project = config.project;
    this._ref = config.ref;
    this._releasedAt = config.releasedAt;
    this._tagMessage = config.tagMessage;
    this._tagName = config.tagName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assets - computed: true, optional: true, required: false
  private _assets = new ReleaseAssetsOutputReference(this, "assets");
  public get assets() {
    return this._assets;
  }
  public putAssets(value: ReleaseAssets) {
    this._assets.internalValue = value;
  }
  public resetAssets() {
    this._assets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetsInput() {
    return this._assets.internalValue;
  }

  // author - computed: true, optional: false, required: false
  private _author = new ReleaseAuthorOutputReference(this, "author");
  public get author() {
    return this._author;
  }

  // commit - computed: true, optional: false, required: false
  private _commit = new ReleaseCommitOutputReference(this, "commit");
  public get commit() {
    return this._commit;
  }

  // commit_path - computed: true, optional: false, required: false
  public get commitPath() {
    return this.getStringAttribute('commit_path');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // description_html - computed: true, optional: false, required: false
  public get descriptionHtml() {
    return this.getStringAttribute('description_html');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // links - computed: true, optional: false, required: false
  private _links = new ReleaseLinksOutputReference(this, "links");
  public get links() {
    return this._links;
  }

  // milestones - computed: false, optional: true, required: false
  private _milestones?: string[]; 
  public get milestones() {
    return cdktf.Fn.tolist(this.getListAttribute('milestones'));
  }
  public set milestones(value: string[]) {
    this._milestones = value;
  }
  public resetMilestones() {
    this._milestones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get milestonesInput() {
    return this._milestones;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // ref - computed: true, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // released_at - computed: true, optional: true, required: false
  private _releasedAt?: string; 
  public get releasedAt() {
    return this.getStringAttribute('released_at');
  }
  public set releasedAt(value: string) {
    this._releasedAt = value;
  }
  public resetReleasedAt() {
    this._releasedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releasedAtInput() {
    return this._releasedAt;
  }

  // tag_message - computed: false, optional: true, required: false
  private _tagMessage?: string; 
  public get tagMessage() {
    return this.getStringAttribute('tag_message');
  }
  public set tagMessage(value: string) {
    this._tagMessage = value;
  }
  public resetTagMessage() {
    this._tagMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagMessageInput() {
    return this._tagMessage;
  }

  // tag_name - computed: false, optional: false, required: true
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }

  // tag_path - computed: true, optional: false, required: false
  public get tagPath() {
    return this.getStringAttribute('tag_path');
  }

  // upcoming_release - computed: true, optional: false, required: false
  public get upcomingRelease() {
    return this.getBooleanAttribute('upcoming_release');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assets: releaseAssetsToTerraform(this._assets.internalValue),
      description: cdktf.stringToTerraform(this._description),
      milestones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._milestones),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      ref: cdktf.stringToTerraform(this._ref),
      released_at: cdktf.stringToTerraform(this._releasedAt),
      tag_message: cdktf.stringToTerraform(this._tagMessage),
      tag_name: cdktf.stringToTerraform(this._tagName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assets: {
        value: releaseAssetsToHclTerraform(this._assets.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ReleaseAssets",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      milestones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._milestones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ref: {
        value: cdktf.stringToHclTerraform(this._ref),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      released_at: {
        value: cdktf.stringToHclTerraform(this._releasedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_message: {
        value: cdktf.stringToHclTerraform(this._tagMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_name: {
        value: cdktf.stringToHclTerraform(this._tagName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
