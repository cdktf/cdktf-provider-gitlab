// https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/project_milestones
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabProjectMilestonesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/project_milestones#id DataGitlabProjectMilestones#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Return only the milestones having the given `iid` (Note: ignored if `include_parent_milestones` is set as `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/project_milestones#iids DataGitlabProjectMilestones#iids}
  */
  readonly iids?: number[];
  /**
  * Include group milestones from parent group and its ancestors. Introduced in GitLab 13.4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/project_milestones#include_parent_milestones DataGitlabProjectMilestones#include_parent_milestones}
  */
  readonly includeParentMilestones?: boolean | cdktf.IResolvable;
  /**
  * The ID or URL-encoded path of the project owned by the authenticated user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/project_milestones#project DataGitlabProjectMilestones#project}
  */
  readonly project: string;
  /**
  * Return only milestones with a title or description matching the provided string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/project_milestones#search DataGitlabProjectMilestones#search}
  */
  readonly search?: string;
  /**
  * Return only `active` or `closed` milestones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/project_milestones#state DataGitlabProjectMilestones#state}
  */
  readonly state?: string;
  /**
  * Return only the milestones having the given `title`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/project_milestones#title DataGitlabProjectMilestones#title}
  */
  readonly title?: string;
}
export interface DataGitlabProjectMilestonesMilestones {
}

export function dataGitlabProjectMilestonesMilestonesToTerraform(struct?: DataGitlabProjectMilestonesMilestones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabProjectMilestonesMilestonesToHclTerraform(struct?: DataGitlabProjectMilestonesMilestones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabProjectMilestonesMilestonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabProjectMilestonesMilestones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectMilestonesMilestones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // due_date - computed: true, optional: false, required: false
  public get dueDate() {
    return this.getStringAttribute('due_date');
  }

  // expired - computed: true, optional: false, required: false
  public get expired() {
    return this.getBooleanAttribute('expired');
  }

  // iid - computed: true, optional: false, required: false
  public get iid() {
    return this.getNumberAttribute('iid');
  }

  // milestone_id - computed: true, optional: false, required: false
  public get milestoneId() {
    return this.getNumberAttribute('milestone_id');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // web_url - computed: true, optional: false, required: false
  public get webUrl() {
    return this.getStringAttribute('web_url');
  }
}

export class DataGitlabProjectMilestonesMilestonesList extends cdktf.ComplexList {

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
  public get(index: number): DataGitlabProjectMilestonesMilestonesOutputReference {
    return new DataGitlabProjectMilestonesMilestonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/project_milestones gitlab_project_milestones}
*/
export class DataGitlabProjectMilestones extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_milestones";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabProjectMilestones resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabProjectMilestones to import
  * @param importFromId The id of the existing DataGitlabProjectMilestones that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/project_milestones#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabProjectMilestones to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_milestones", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/project_milestones gitlab_project_milestones} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabProjectMilestonesConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabProjectMilestonesConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_milestones',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '16.8.0',
        providerVersionConstraint: '~> 16.0'
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
    this._iids = config.iids;
    this._includeParentMilestones = config.includeParentMilestones;
    this._project = config.project;
    this._search = config.search;
    this._state = config.state;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // iids - computed: false, optional: true, required: false
  private _iids?: number[]; 
  public get iids() {
    return this.getNumberListAttribute('iids');
  }
  public set iids(value: number[]) {
    this._iids = value;
  }
  public resetIids() {
    this._iids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iidsInput() {
    return this._iids;
  }

  // include_parent_milestones - computed: false, optional: true, required: false
  private _includeParentMilestones?: boolean | cdktf.IResolvable; 
  public get includeParentMilestones() {
    return this.getBooleanAttribute('include_parent_milestones');
  }
  public set includeParentMilestones(value: boolean | cdktf.IResolvable) {
    this._includeParentMilestones = value;
  }
  public resetIncludeParentMilestones() {
    this._includeParentMilestones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeParentMilestonesInput() {
    return this._includeParentMilestones;
  }

  // milestones - computed: true, optional: false, required: false
  private _milestones = new DataGitlabProjectMilestonesMilestonesList(this, "milestones", false);
  public get milestones() {
    return this._milestones;
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

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      iids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._iids),
      include_parent_milestones: cdktf.booleanToTerraform(this._includeParentMilestones),
      project: cdktf.stringToTerraform(this._project),
      search: cdktf.stringToTerraform(this._search),
      state: cdktf.stringToTerraform(this._state),
      title: cdktf.stringToTerraform(this._title),
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
      iids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._iids),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      include_parent_milestones: {
        value: cdktf.booleanToHclTerraform(this._includeParentMilestones),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search: {
        value: cdktf.stringToHclTerraform(this._search),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
