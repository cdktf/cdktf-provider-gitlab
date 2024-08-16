/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/data-sources/branch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabBranchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/data-sources/branch#id DataGitlabBranch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/data-sources/branch#name DataGitlabBranch#name}
  */
  readonly name: string;
  /**
  * The full path or id of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/data-sources/branch#project DataGitlabBranch#project}
  */
  readonly project: string;
}
export interface DataGitlabBranchCommit {
}

export function dataGitlabBranchCommitToTerraform(struct?: DataGitlabBranchCommit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabBranchCommitToHclTerraform(struct?: DataGitlabBranchCommit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabBranchCommitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGitlabBranchCommit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabBranchCommit | undefined) {
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

export class DataGitlabBranchCommitList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGitlabBranchCommitOutputReference {
    return new DataGitlabBranchCommitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/data-sources/branch gitlab_branch}
*/
export class DataGitlabBranch extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_branch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabBranch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabBranch to import
  * @param importFromId The id of the existing DataGitlabBranch that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/data-sources/branch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabBranch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_branch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/data-sources/branch gitlab_branch} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabBranchConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabBranchConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_branch',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '17.3.0',
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
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_push - computed: true, optional: false, required: false
  public get canPush() {
    return this.getBooleanAttribute('can_push');
  }

  // commit - computed: true, optional: false, required: false
  private _commit = new DataGitlabBranchCommitList(this, "commit", true);
  public get commit() {
    return this._commit;
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // developer_can_merge - computed: true, optional: false, required: false
  public get developerCanMerge() {
    return this.getBooleanAttribute('developer_can_merge');
  }

  // developer_can_push - computed: true, optional: false, required: false
  public get developerCanPush() {
    return this.getBooleanAttribute('developer_can_push');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // merged - computed: true, optional: false, required: false
  public get merged() {
    return this.getBooleanAttribute('merged');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
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

  // protected - computed: true, optional: false, required: false
  public get protected() {
    return this.getBooleanAttribute('protected');
  }

  // web_url - computed: true, optional: false, required: false
  public get webUrl() {
    return this.getStringAttribute('web_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
