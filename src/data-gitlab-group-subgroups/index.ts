// https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/group_subgroups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabGroupSubgroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Show all the groups you have access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/group_subgroups#all_available DataGitlabGroupSubgroups#all_available}
  */
  readonly allAvailable?: boolean | cdktf.IResolvable;
  /**
  * The ID of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/group_subgroups#group_id DataGitlabGroupSubgroups#group_id}
  */
  readonly groupId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/group_subgroups#id DataGitlabGroupSubgroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Limit to groups where current user has at least this access level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/group_subgroups#min_access_level DataGitlabGroupSubgroups#min_access_level}
  */
  readonly minAccessLevel?: string;
  /**
  * Order groups by name, path or id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/group_subgroups#order_by DataGitlabGroupSubgroups#order_by}
  */
  readonly orderBy?: string;
  /**
  * Limit to groups explicitly owned by the current user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/group_subgroups#owned DataGitlabGroupSubgroups#owned}
  */
  readonly owned?: boolean | cdktf.IResolvable;
  /**
  * Return the list of authorized groups matching the search criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/group_subgroups#search DataGitlabGroupSubgroups#search}
  */
  readonly search?: string;
  /**
  * Skip the group IDs passed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/group_subgroups#skip_groups DataGitlabGroupSubgroups#skip_groups}
  */
  readonly skipGroups?: number[];
  /**
  * Order groups in asc or desc order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/group_subgroups#sort DataGitlabGroupSubgroups#sort}
  */
  readonly sort?: string;
  /**
  * Include group statistics (administrators only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/group_subgroups#statistics DataGitlabGroupSubgroups#statistics}
  */
  readonly statistics?: boolean | cdktf.IResolvable;
  /**
  * Include custom attributes in response (administrators only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/group_subgroups#with_custom_attributes DataGitlabGroupSubgroups#with_custom_attributes}
  */
  readonly withCustomAttributes?: boolean | cdktf.IResolvable;
}
export interface DataGitlabGroupSubgroupsSubgroups {
}

export function dataGitlabGroupSubgroupsSubgroupsToTerraform(struct?: DataGitlabGroupSubgroupsSubgroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabGroupSubgroupsSubgroupsToHclTerraform(struct?: DataGitlabGroupSubgroupsSubgroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabGroupSubgroupsSubgroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabGroupSubgroupsSubgroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabGroupSubgroupsSubgroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_devops_enabled - computed: true, optional: false, required: false
  public get autoDevopsEnabled() {
    return this.getBooleanAttribute('auto_devops_enabled');
  }

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // default_branch_protection - computed: true, optional: false, required: false
  public get defaultBranchProtection() {
    return this.getNumberAttribute('default_branch_protection');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // emails_disabled - computed: true, optional: false, required: false
  public get emailsDisabled() {
    return this.getBooleanAttribute('emails_disabled');
  }

  // file_template_project_id - computed: true, optional: false, required: false
  public get fileTemplateProjectId() {
    return this.getNumberAttribute('file_template_project_id');
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // full_path - computed: true, optional: false, required: false
  public get fullPath() {
    return this.getStringAttribute('full_path');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // ip_restriction_ranges - computed: true, optional: false, required: false
  public get ipRestrictionRanges() {
    return this.getStringAttribute('ip_restriction_ranges');
  }

  // lfs_enabled - computed: true, optional: false, required: false
  public get lfsEnabled() {
    return this.getBooleanAttribute('lfs_enabled');
  }

  // mentions_disabled - computed: true, optional: false, required: false
  public get mentionsDisabled() {
    return this.getBooleanAttribute('mentions_disabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getNumberAttribute('parent_id');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // project_creation_level - computed: true, optional: false, required: false
  public get projectCreationLevel() {
    return this.getStringAttribute('project_creation_level');
  }

  // request_access_enabled - computed: true, optional: false, required: false
  public get requestAccessEnabled() {
    return this.getBooleanAttribute('request_access_enabled');
  }

  // require_two_factor_authentication - computed: true, optional: false, required: false
  public get requireTwoFactorAuthentication() {
    return this.getBooleanAttribute('require_two_factor_authentication');
  }

  // share_with_group_lock - computed: true, optional: false, required: false
  public get shareWithGroupLock() {
    return this.getBooleanAttribute('share_with_group_lock');
  }

  // shared_runners_setting - computed: true, optional: false, required: false
  public get sharedRunnersSetting() {
    return this.getStringAttribute('shared_runners_setting');
  }

  // statistics - computed: true, optional: false, required: false
  private _statistics = new cdktf.StringMap(this, "statistics");
  public get statistics() {
    return this._statistics;
  }

  // subgroup_creation_level - computed: true, optional: false, required: false
  public get subgroupCreationLevel() {
    return this.getStringAttribute('subgroup_creation_level');
  }

  // two_factor_grace_period - computed: true, optional: false, required: false
  public get twoFactorGracePeriod() {
    return this.getNumberAttribute('two_factor_grace_period');
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }

  // web_url - computed: true, optional: false, required: false
  public get webUrl() {
    return this.getStringAttribute('web_url');
  }

  // wiki_access_level - computed: true, optional: false, required: false
  public get wikiAccessLevel() {
    return this.getStringAttribute('wiki_access_level');
  }
}

export class DataGitlabGroupSubgroupsSubgroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataGitlabGroupSubgroupsSubgroupsOutputReference {
    return new DataGitlabGroupSubgroupsSubgroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/group_subgroups gitlab_group_subgroups}
*/
export class DataGitlabGroupSubgroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_group_subgroups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabGroupSubgroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabGroupSubgroups to import
  * @param importFromId The id of the existing DataGitlabGroupSubgroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/group_subgroups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabGroupSubgroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_group_subgroups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/group_subgroups gitlab_group_subgroups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabGroupSubgroupsConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabGroupSubgroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_group_subgroups',
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
    this._allAvailable = config.allAvailable;
    this._groupId = config.groupId;
    this._id = config.id;
    this._minAccessLevel = config.minAccessLevel;
    this._orderBy = config.orderBy;
    this._owned = config.owned;
    this._search = config.search;
    this._skipGroups = config.skipGroups;
    this._sort = config.sort;
    this._statistics = config.statistics;
    this._withCustomAttributes = config.withCustomAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_available - computed: true, optional: true, required: false
  private _allAvailable?: boolean | cdktf.IResolvable; 
  public get allAvailable() {
    return this.getBooleanAttribute('all_available');
  }
  public set allAvailable(value: boolean | cdktf.IResolvable) {
    this._allAvailable = value;
  }
  public resetAllAvailable() {
    this._allAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allAvailableInput() {
    return this._allAvailable;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // min_access_level - computed: true, optional: true, required: false
  private _minAccessLevel?: string; 
  public get minAccessLevel() {
    return this.getStringAttribute('min_access_level');
  }
  public set minAccessLevel(value: string) {
    this._minAccessLevel = value;
  }
  public resetMinAccessLevel() {
    this._minAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAccessLevelInput() {
    return this._minAccessLevel;
  }

  // order_by - computed: true, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // owned - computed: true, optional: true, required: false
  private _owned?: boolean | cdktf.IResolvable; 
  public get owned() {
    return this.getBooleanAttribute('owned');
  }
  public set owned(value: boolean | cdktf.IResolvable) {
    this._owned = value;
  }
  public resetOwned() {
    this._owned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownedInput() {
    return this._owned;
  }

  // search - computed: true, optional: true, required: false
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

  // skip_groups - computed: true, optional: true, required: false
  private _skipGroups?: number[]; 
  public get skipGroups() {
    return this.getNumberListAttribute('skip_groups');
  }
  public set skipGroups(value: number[]) {
    this._skipGroups = value;
  }
  public resetSkipGroups() {
    this._skipGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipGroupsInput() {
    return this._skipGroups;
  }

  // sort - computed: true, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // statistics - computed: true, optional: true, required: false
  private _statistics?: boolean | cdktf.IResolvable; 
  public get statistics() {
    return this.getBooleanAttribute('statistics');
  }
  public set statistics(value: boolean | cdktf.IResolvable) {
    this._statistics = value;
  }
  public resetStatistics() {
    this._statistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics;
  }

  // subgroups - computed: true, optional: false, required: false
  private _subgroups = new DataGitlabGroupSubgroupsSubgroupsList(this, "subgroups", false);
  public get subgroups() {
    return this._subgroups;
  }

  // with_custom_attributes - computed: true, optional: true, required: false
  private _withCustomAttributes?: boolean | cdktf.IResolvable; 
  public get withCustomAttributes() {
    return this.getBooleanAttribute('with_custom_attributes');
  }
  public set withCustomAttributes(value: boolean | cdktf.IResolvable) {
    this._withCustomAttributes = value;
  }
  public resetWithCustomAttributes() {
    this._withCustomAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withCustomAttributesInput() {
    return this._withCustomAttributes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all_available: cdktf.booleanToTerraform(this._allAvailable),
      group_id: cdktf.numberToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      min_access_level: cdktf.stringToTerraform(this._minAccessLevel),
      order_by: cdktf.stringToTerraform(this._orderBy),
      owned: cdktf.booleanToTerraform(this._owned),
      search: cdktf.stringToTerraform(this._search),
      skip_groups: cdktf.listMapper(cdktf.numberToTerraform, false)(this._skipGroups),
      sort: cdktf.stringToTerraform(this._sort),
      statistics: cdktf.booleanToTerraform(this._statistics),
      with_custom_attributes: cdktf.booleanToTerraform(this._withCustomAttributes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_available: {
        value: cdktf.booleanToHclTerraform(this._allAvailable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_access_level: {
        value: cdktf.stringToHclTerraform(this._minAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owned: {
        value: cdktf.booleanToHclTerraform(this._owned),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      search: {
        value: cdktf.stringToHclTerraform(this._search),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_groups: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._skipGroups),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      sort: {
        value: cdktf.stringToHclTerraform(this._sort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statistics: {
        value: cdktf.booleanToHclTerraform(this._statistics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      with_custom_attributes: {
        value: cdktf.booleanToHclTerraform(this._withCustomAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
