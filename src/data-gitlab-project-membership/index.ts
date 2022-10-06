// https://www.terraform.io/docs/providers/gitlab/d/project_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabProjectMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * The full path of the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_membership#full_path DataGitlabProjectMembership#full_path}
  */
  readonly fullPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_membership#id DataGitlabProjectMembership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Return all project members including members through ancestor groups
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_membership#inherited DataGitlabProjectMembership#inherited}
  */
  readonly inherited?: boolean | cdktf.IResolvable;
  /**
  * The ID of the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_membership#project_id DataGitlabProjectMembership#project_id}
  */
  readonly projectId?: number;
  /**
  * A query string to search for members
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_membership#query DataGitlabProjectMembership#query}
  */
  readonly query?: string;
}
export interface DataGitlabProjectMembershipMembers {
}

export function dataGitlabProjectMembershipMembersToTerraform(struct?: DataGitlabProjectMembershipMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGitlabProjectMembershipMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabProjectMembershipMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectMembershipMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_level - computed: true, optional: false, required: false
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
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

export class DataGitlabProjectMembershipMembersList extends cdktf.ComplexList {

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
  public get(index: number): DataGitlabProjectMembershipMembersOutputReference {
    return new DataGitlabProjectMembershipMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/d/project_membership gitlab_project_membership}
*/
export class DataGitlabProjectMembership extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_membership";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/d/project_membership gitlab_project_membership} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabProjectMembershipConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGitlabProjectMembershipConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_membership',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '3.18.0',
        providerVersionConstraint: '~> 3.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fullPath = config.fullPath;
    this._id = config.id;
    this._inherited = config.inherited;
    this._projectId = config.projectId;
    this._query = config.query;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // full_path - computed: true, optional: true, required: false
  private _fullPath?: string; 
  public get fullPath() {
    return this.getStringAttribute('full_path');
  }
  public set fullPath(value: string) {
    this._fullPath = value;
  }
  public resetFullPath() {
    this._fullPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullPathInput() {
    return this._fullPath;
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

  // inherited - computed: false, optional: true, required: false
  private _inherited?: boolean | cdktf.IResolvable; 
  public get inherited() {
    return this.getBooleanAttribute('inherited');
  }
  public set inherited(value: boolean | cdktf.IResolvable) {
    this._inherited = value;
  }
  public resetInherited() {
    this._inherited = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedInput() {
    return this._inherited;
  }

  // members - computed: true, optional: false, required: false
  private _members = new DataGitlabProjectMembershipMembersList(this, "members", false);
  public get members() {
    return this._members;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      full_path: cdktf.stringToTerraform(this._fullPath),
      id: cdktf.stringToTerraform(this._id),
      inherited: cdktf.booleanToTerraform(this._inherited),
      project_id: cdktf.numberToTerraform(this._projectId),
      query: cdktf.stringToTerraform(this._query),
    };
  }
}