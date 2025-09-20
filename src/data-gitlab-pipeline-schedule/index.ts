/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/pipeline_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabPipelineScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/pipeline_schedule#cron_timezone DataGitlabPipelineSchedule#cron_timezone}
  */
  readonly cronTimezone?: string;
  /**
  * The pipeline schedule id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/pipeline_schedule#pipeline_schedule_id DataGitlabPipelineSchedule#pipeline_schedule_id}
  */
  readonly pipelineScheduleId: number;
  /**
  * The name or id of the project to add the schedule to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/pipeline_schedule#project DataGitlabPipelineSchedule#project}
  */
  readonly project: string;
}
export interface DataGitlabPipelineScheduleLastPipeline {
}

export function dataGitlabPipelineScheduleLastPipelineToTerraform(struct?: DataGitlabPipelineScheduleLastPipeline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabPipelineScheduleLastPipelineToHclTerraform(struct?: DataGitlabPipelineScheduleLastPipeline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabPipelineScheduleLastPipelineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataGitlabPipelineScheduleLastPipeline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabPipelineScheduleLastPipeline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // sha - computed: true, optional: false, required: false
  public get sha() {
    return this.getStringAttribute('sha');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataGitlabPipelineScheduleOwner {
}

export function dataGitlabPipelineScheduleOwnerToTerraform(struct?: DataGitlabPipelineScheduleOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabPipelineScheduleOwnerToHclTerraform(struct?: DataGitlabPipelineScheduleOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabPipelineScheduleOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataGitlabPipelineScheduleOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabPipelineScheduleOwner | undefined) {
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
export interface DataGitlabPipelineScheduleVariables {
}

export function dataGitlabPipelineScheduleVariablesToTerraform(struct?: DataGitlabPipelineScheduleVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabPipelineScheduleVariablesToHclTerraform(struct?: DataGitlabPipelineScheduleVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabPipelineScheduleVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabPipelineScheduleVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabPipelineScheduleVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // variable_type - computed: true, optional: false, required: false
  public get variableType() {
    return this.getStringAttribute('variable_type');
  }
}

export class DataGitlabPipelineScheduleVariablesList extends cdktf.ComplexList {

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
  public get(index: number): DataGitlabPipelineScheduleVariablesOutputReference {
    return new DataGitlabPipelineScheduleVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/pipeline_schedule gitlab_pipeline_schedule}
*/
export class DataGitlabPipelineSchedule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_pipeline_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabPipelineSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabPipelineSchedule to import
  * @param importFromId The id of the existing DataGitlabPipelineSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/pipeline_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabPipelineSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_pipeline_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/pipeline_schedule gitlab_pipeline_schedule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabPipelineScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabPipelineScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_pipeline_schedule',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.4.0',
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
    this._cronTimezone = config.cronTimezone;
    this._pipelineScheduleId = config.pipelineScheduleId;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_pipeline - computed: true, optional: false, required: false
  private _lastPipeline = new DataGitlabPipelineScheduleLastPipelineOutputReference(this, "last_pipeline");
  public get lastPipeline() {
    return this._lastPipeline;
  }

  // next_run_at - computed: true, optional: false, required: false
  public get nextRunAt() {
    return this.getStringAttribute('next_run_at');
  }

  // owner - computed: true, optional: false, required: false
  private _owner = new DataGitlabPipelineScheduleOwnerOutputReference(this, "owner");
  public get owner() {
    return this._owner;
  }

  // pipeline_schedule_id - computed: false, optional: false, required: true
  private _pipelineScheduleId?: number; 
  public get pipelineScheduleId() {
    return this.getNumberAttribute('pipeline_schedule_id');
  }
  public set pipelineScheduleId(value: number) {
    this._pipelineScheduleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineScheduleIdInput() {
    return this._pipelineScheduleId;
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

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // variables - computed: true, optional: false, required: false
  private _variables = new DataGitlabPipelineScheduleVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cron_timezone: cdktf.stringToTerraform(this._cronTimezone),
      pipeline_schedule_id: cdktf.numberToTerraform(this._pipelineScheduleId),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cron_timezone: {
        value: cdktf.stringToHclTerraform(this._cronTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_schedule_id: {
        value: cdktf.numberToHclTerraform(this._pipelineScheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
