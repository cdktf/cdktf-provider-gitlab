// https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/data-sources/group_hooks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabGroupHooksConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID or full path of the group.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/data-sources/group_hooks#group DataGitlabGroupHooks#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/data-sources/group_hooks#id DataGitlabGroupHooks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataGitlabGroupHooksHooks {
}

export function dataGitlabGroupHooksHooksToTerraform(struct?: DataGitlabGroupHooksHooks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGitlabGroupHooksHooksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabGroupHooksHooks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabGroupHooksHooks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // confidential_issues_events - computed: true, optional: false, required: false
  public get confidentialIssuesEvents() {
    return this.getBooleanAttribute('confidential_issues_events');
  }

  // confidential_note_events - computed: true, optional: false, required: false
  public get confidentialNoteEvents() {
    return this.getBooleanAttribute('confidential_note_events');
  }

  // deployment_events - computed: true, optional: false, required: false
  public get deploymentEvents() {
    return this.getBooleanAttribute('deployment_events');
  }

  // enable_ssl_verification - computed: true, optional: false, required: false
  public get enableSslVerification() {
    return this.getBooleanAttribute('enable_ssl_verification');
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // hook_id - computed: true, optional: false, required: false
  public get hookId() {
    return this.getNumberAttribute('hook_id');
  }

  // issues_events - computed: true, optional: false, required: false
  public get issuesEvents() {
    return this.getBooleanAttribute('issues_events');
  }

  // job_events - computed: true, optional: false, required: false
  public get jobEvents() {
    return this.getBooleanAttribute('job_events');
  }

  // merge_requests_events - computed: true, optional: false, required: false
  public get mergeRequestsEvents() {
    return this.getBooleanAttribute('merge_requests_events');
  }

  // note_events - computed: true, optional: false, required: false
  public get noteEvents() {
    return this.getBooleanAttribute('note_events');
  }

  // pipeline_events - computed: true, optional: false, required: false
  public get pipelineEvents() {
    return this.getBooleanAttribute('pipeline_events');
  }

  // push_events - computed: true, optional: false, required: false
  public get pushEvents() {
    return this.getBooleanAttribute('push_events');
  }

  // push_events_branch_filter - computed: true, optional: false, required: false
  public get pushEventsBranchFilter() {
    return this.getStringAttribute('push_events_branch_filter');
  }

  // releases_events - computed: true, optional: false, required: false
  public get releasesEvents() {
    return this.getBooleanAttribute('releases_events');
  }

  // subgroup_events - computed: true, optional: false, required: false
  public get subgroupEvents() {
    return this.getBooleanAttribute('subgroup_events');
  }

  // tag_push_events - computed: true, optional: false, required: false
  public get tagPushEvents() {
    return this.getBooleanAttribute('tag_push_events');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // wiki_page_events - computed: true, optional: false, required: false
  public get wikiPageEvents() {
    return this.getBooleanAttribute('wiki_page_events');
  }
}

export class DataGitlabGroupHooksHooksList extends cdktf.ComplexList {

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
  public get(index: number): DataGitlabGroupHooksHooksOutputReference {
    return new DataGitlabGroupHooksHooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/data-sources/group_hooks gitlab_group_hooks}
*/
export class DataGitlabGroupHooks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_group_hooks";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/data-sources/group_hooks gitlab_group_hooks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabGroupHooksConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabGroupHooksConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_group_hooks',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '15.11.0',
        providerVersionConstraint: '~> 15.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._group = config.group;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // hooks - computed: true, optional: false, required: false
  private _hooks = new DataGitlabGroupHooksHooksList(this, "hooks", false);
  public get hooks() {
    return this._hooks;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
