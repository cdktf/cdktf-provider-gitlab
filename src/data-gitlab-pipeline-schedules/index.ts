// https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/data-sources/pipeline_schedules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabPipelineSchedulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name or id of the project to add the schedule to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/data-sources/pipeline_schedules#project DataGitlabPipelineSchedules#project}
  */
  readonly project: string;
}
export interface DataGitlabPipelineSchedulesPipelineSchedulesOwner {
}

export function dataGitlabPipelineSchedulesPipelineSchedulesOwnerToTerraform(struct?: DataGitlabPipelineSchedulesPipelineSchedulesOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabPipelineSchedulesPipelineSchedulesOwnerToHclTerraform(struct?: DataGitlabPipelineSchedulesPipelineSchedulesOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataGitlabPipelineSchedulesPipelineSchedulesOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabPipelineSchedulesPipelineSchedulesOwner | undefined) {
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
export interface DataGitlabPipelineSchedulesPipelineSchedules {
  /**
  * The timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/data-sources/pipeline_schedules#cron_timezone DataGitlabPipelineSchedules#cron_timezone}
  */
  readonly cronTimezone?: string;
  /**
  * The pipeline schedule id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/data-sources/pipeline_schedules#id DataGitlabPipelineSchedules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

export function dataGitlabPipelineSchedulesPipelineSchedulesToTerraform(struct?: DataGitlabPipelineSchedulesPipelineSchedules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_timezone: cdktf.stringToTerraform(struct!.cronTimezone),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function dataGitlabPipelineSchedulesPipelineSchedulesToHclTerraform(struct?: DataGitlabPipelineSchedulesPipelineSchedules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_timezone: {
      value: cdktf.stringToHclTerraform(struct!.cronTimezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGitlabPipelineSchedulesPipelineSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabPipelineSchedulesPipelineSchedules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronTimezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronTimezone = this._cronTimezone;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabPipelineSchedulesPipelineSchedules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cronTimezone = undefined;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cronTimezone = value.cronTimezone;
      this._id = value.id;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // cron - computed: true, optional: false, required: false
  public get cron() {
    return this.getStringAttribute('cron');
  }

  // cron_timezone - computed: true, optional: true, required: false
  private _cronTimezone?: string; 
  public get cronTimezone() {
    return this.getStringAttribute('cron_timezone');
  }
  public set cronTimezone(value: string) {
    this._cronTimezone = value;
  }
  public resetCronTimezone() {
    this._cronTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronTimezoneInput() {
    return this._cronTimezone;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // next_run_at - computed: true, optional: false, required: false
  public get nextRunAt() {
    return this.getStringAttribute('next_run_at');
  }

  // owner - computed: true, optional: false, required: false
  private _owner = new DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference(this, "owner");
  public get owner() {
    return this._owner;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataGitlabPipelineSchedulesPipelineSchedulesList extends cdktf.ComplexList {
  public internalValue? : DataGitlabPipelineSchedulesPipelineSchedules[] | cdktf.IResolvable

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
  public get(index: number): DataGitlabPipelineSchedulesPipelineSchedulesOutputReference {
    return new DataGitlabPipelineSchedulesPipelineSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/data-sources/pipeline_schedules gitlab_pipeline_schedules}
*/
export class DataGitlabPipelineSchedules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_pipeline_schedules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabPipelineSchedules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabPipelineSchedules to import
  * @param importFromId The id of the existing DataGitlabPipelineSchedules that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/data-sources/pipeline_schedules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabPipelineSchedules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_pipeline_schedules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/data-sources/pipeline_schedules gitlab_pipeline_schedules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabPipelineSchedulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabPipelineSchedulesConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_pipeline_schedules',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.0.0',
        providerVersionConstraint: '~> 18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pipeline_schedules - computed: true, optional: false, required: false
  private _pipelineSchedules = new DataGitlabPipelineSchedulesPipelineSchedulesList(this, "pipeline_schedules", false);
  public get pipelineSchedules() {
    return this._pipelineSchedules;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
