// https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/value_stream_analytics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ValueStreamAnalyticsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Full path of the group the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/value_stream_analytics#group_full_path ValueStreamAnalytics#group_full_path}
  */
  readonly groupFullPath?: string;
  /**
  * The name of the value stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/value_stream_analytics#name ValueStreamAnalytics#name}
  */
  readonly name: string;
  /**
  * Full path of the project the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/value_stream_analytics#project_full_path ValueStreamAnalytics#project_full_path}
  */
  readonly projectFullPath?: string;
  /**
  * Stages of the value stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/value_stream_analytics#stages ValueStreamAnalytics#stages}
  */
  readonly stages: ValueStreamAnalyticsStages[] | cdktf.IResolvable;
}
export interface ValueStreamAnalyticsStages {
  /**
  * Boolean whether the stage is customized. If false, it assigns a built-in default stage by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/value_stream_analytics#custom ValueStreamAnalytics#custom}
  */
  readonly custom?: boolean | cdktf.IResolvable;
  /**
  * End event identifier. Valid values are: `CODE_STAGE_START`, `ISSUE_CLOSED`, `ISSUE_CREATED`, `ISSUE_DEPLOYED_TO_PRODUCTION`, `ISSUE_FIRST_ADDED_TO_BOARD`, `ISSUE_FIRST_ADDED_TO_ITERATION`, `ISSUE_FIRST_ASSIGNED_AT`, `ISSUE_FIRST_ASSOCIATED_WITH_MILESTONE`, `ISSUE_FIRST_MENTIONED_IN_COMMIT`, `ISSUE_LABEL_ADDED`, `ISSUE_LABEL_REMOVED`, `ISSUE_LAST_EDITED`, `ISSUE_STAGE_END`, `MERGE_REQUEST_CLOSED`, `MERGE_REQUEST_CREATED`, `MERGE_REQUEST_FIRST_ASSIGNED_AT`, `MERGE_REQUEST_FIRST_COMMIT_AT`, `MERGE_REQUEST_FIRST_DEPLOYED_TO_PRODUCTION`, `MERGE_REQUEST_LABEL_ADDED`, `MERGE_REQUEST_LABEL_REMOVED`, `MERGE_REQUEST_LAST_BUILD_FINISHED`, `MERGE_REQUEST_LAST_BUILD_STARTED`, `MERGE_REQUEST_LAST_EDITED`, `MERGE_REQUEST_MERGED`, `MERGE_REQUEST_REVIEWER_FIRST_ASSIGNED`, `MERGE_REQUEST_PLAN_STAGE_START`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/value_stream_analytics#end_event_identifier ValueStreamAnalytics#end_event_identifier}
  */
  readonly endEventIdentifier?: string;
  /**
  * Label ID associated with the end event identifier. In the format of `gid://gitlab/GroupLabel/<id>` or `gid://gitlab/ProjectLabel/<id>`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/value_stream_analytics#end_event_label_id ValueStreamAnalytics#end_event_label_id}
  */
  readonly endEventLabelId?: string;
  /**
  * Boolean whether the stage is hidden, GitLab provided default stages are hidden by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/value_stream_analytics#hidden ValueStreamAnalytics#hidden}
  */
  readonly hidden?: boolean | cdktf.IResolvable;
  /**
  * The name of the value stream stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/value_stream_analytics#name ValueStreamAnalytics#name}
  */
  readonly name: string;
  /**
  * Start event identifier. Valid values are: `CODE_STAGE_START`, `ISSUE_CLOSED`, `ISSUE_CREATED`, `ISSUE_DEPLOYED_TO_PRODUCTION`, `ISSUE_FIRST_ADDED_TO_BOARD`, `ISSUE_FIRST_ADDED_TO_ITERATION`, `ISSUE_FIRST_ASSIGNED_AT`, `ISSUE_FIRST_ASSOCIATED_WITH_MILESTONE`, `ISSUE_FIRST_MENTIONED_IN_COMMIT`, `ISSUE_LABEL_ADDED`, `ISSUE_LABEL_REMOVED`, `ISSUE_LAST_EDITED`, `ISSUE_STAGE_END`, `MERGE_REQUEST_CLOSED`, `MERGE_REQUEST_CREATED`, `MERGE_REQUEST_FIRST_ASSIGNED_AT`, `MERGE_REQUEST_FIRST_COMMIT_AT`, `MERGE_REQUEST_FIRST_DEPLOYED_TO_PRODUCTION`, `MERGE_REQUEST_LABEL_ADDED`, `MERGE_REQUEST_LABEL_REMOVED`, `MERGE_REQUEST_LAST_BUILD_FINISHED`, `MERGE_REQUEST_LAST_BUILD_STARTED`, `MERGE_REQUEST_LAST_EDITED`, `MERGE_REQUEST_MERGED`, `MERGE_REQUEST_REVIEWER_FIRST_ASSIGNED`, `MERGE_REQUEST_PLAN_STAGE_START`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/value_stream_analytics#start_event_identifier ValueStreamAnalytics#start_event_identifier}
  */
  readonly startEventIdentifier?: string;
  /**
  * Label ID associated with the start event identifier. In the format of `gid://gitlab/GroupLabel/<id>` or `gid://gitlab/ProjectLabel/<id>`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/value_stream_analytics#start_event_label_id ValueStreamAnalytics#start_event_label_id}
  */
  readonly startEventLabelId?: string;
}

export function valueStreamAnalyticsStagesToTerraform(struct?: ValueStreamAnalyticsStages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: cdktf.booleanToTerraform(struct!.custom),
    end_event_identifier: cdktf.stringToTerraform(struct!.endEventIdentifier),
    end_event_label_id: cdktf.stringToTerraform(struct!.endEventLabelId),
    hidden: cdktf.booleanToTerraform(struct!.hidden),
    name: cdktf.stringToTerraform(struct!.name),
    start_event_identifier: cdktf.stringToTerraform(struct!.startEventIdentifier),
    start_event_label_id: cdktf.stringToTerraform(struct!.startEventLabelId),
  }
}


export function valueStreamAnalyticsStagesToHclTerraform(struct?: ValueStreamAnalyticsStages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom: {
      value: cdktf.booleanToHclTerraform(struct!.custom),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    end_event_identifier: {
      value: cdktf.stringToHclTerraform(struct!.endEventIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_event_label_id: {
      value: cdktf.stringToHclTerraform(struct!.endEventLabelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hidden: {
      value: cdktf.booleanToHclTerraform(struct!.hidden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_event_identifier: {
      value: cdktf.stringToHclTerraform(struct!.startEventIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_event_label_id: {
      value: cdktf.stringToHclTerraform(struct!.startEventLabelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ValueStreamAnalyticsStagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ValueStreamAnalyticsStages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom;
    }
    if (this._endEventIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.endEventIdentifier = this._endEventIdentifier;
    }
    if (this._endEventLabelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endEventLabelId = this._endEventLabelId;
    }
    if (this._hidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.hidden = this._hidden;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._startEventIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.startEventIdentifier = this._startEventIdentifier;
    }
    if (this._startEventLabelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startEventLabelId = this._startEventLabelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ValueStreamAnalyticsStages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._custom = undefined;
      this._endEventIdentifier = undefined;
      this._endEventLabelId = undefined;
      this._hidden = undefined;
      this._name = undefined;
      this._startEventIdentifier = undefined;
      this._startEventLabelId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._custom = value.custom;
      this._endEventIdentifier = value.endEventIdentifier;
      this._endEventLabelId = value.endEventLabelId;
      this._hidden = value.hidden;
      this._name = value.name;
      this._startEventIdentifier = value.startEventIdentifier;
      this._startEventLabelId = value.startEventLabelId;
    }
  }

  // custom - computed: false, optional: true, required: false
  private _custom?: boolean | cdktf.IResolvable; 
  public get custom() {
    return this.getBooleanAttribute('custom');
  }
  public set custom(value: boolean | cdktf.IResolvable) {
    this._custom = value;
  }
  public resetCustom() {
    this._custom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom;
  }

  // end_event_identifier - computed: true, optional: true, required: false
  private _endEventIdentifier?: string; 
  public get endEventIdentifier() {
    return this.getStringAttribute('end_event_identifier');
  }
  public set endEventIdentifier(value: string) {
    this._endEventIdentifier = value;
  }
  public resetEndEventIdentifier() {
    this._endEventIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endEventIdentifierInput() {
    return this._endEventIdentifier;
  }

  // end_event_label_id - computed: true, optional: true, required: false
  private _endEventLabelId?: string; 
  public get endEventLabelId() {
    return this.getStringAttribute('end_event_label_id');
  }
  public set endEventLabelId(value: string) {
    this._endEventLabelId = value;
  }
  public resetEndEventLabelId() {
    this._endEventLabelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endEventLabelIdInput() {
    return this._endEventLabelId;
  }

  // hidden - computed: false, optional: true, required: false
  private _hidden?: boolean | cdktf.IResolvable; 
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }
  public set hidden(value: boolean | cdktf.IResolvable) {
    this._hidden = value;
  }
  public resetHidden() {
    this._hidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // start_event_identifier - computed: true, optional: true, required: false
  private _startEventIdentifier?: string; 
  public get startEventIdentifier() {
    return this.getStringAttribute('start_event_identifier');
  }
  public set startEventIdentifier(value: string) {
    this._startEventIdentifier = value;
  }
  public resetStartEventIdentifier() {
    this._startEventIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startEventIdentifierInput() {
    return this._startEventIdentifier;
  }

  // start_event_label_id - computed: true, optional: true, required: false
  private _startEventLabelId?: string; 
  public get startEventLabelId() {
    return this.getStringAttribute('start_event_label_id');
  }
  public set startEventLabelId(value: string) {
    this._startEventLabelId = value;
  }
  public resetStartEventLabelId() {
    this._startEventLabelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startEventLabelIdInput() {
    return this._startEventLabelId;
  }
}

export class ValueStreamAnalyticsStagesList extends cdktf.ComplexList {
  public internalValue? : ValueStreamAnalyticsStages[] | cdktf.IResolvable

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
  public get(index: number): ValueStreamAnalyticsStagesOutputReference {
    return new ValueStreamAnalyticsStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/value_stream_analytics gitlab_value_stream_analytics}
*/
export class ValueStreamAnalytics extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_value_stream_analytics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ValueStreamAnalytics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ValueStreamAnalytics to import
  * @param importFromId The id of the existing ValueStreamAnalytics that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/value_stream_analytics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ValueStreamAnalytics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_value_stream_analytics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/value_stream_analytics gitlab_value_stream_analytics} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ValueStreamAnalyticsConfig
  */
  public constructor(scope: Construct, id: string, config: ValueStreamAnalyticsConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_value_stream_analytics',
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
    this._groupFullPath = config.groupFullPath;
    this._name = config.name;
    this._projectFullPath = config.projectFullPath;
    this._stages.internalValue = config.stages;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_full_path - computed: false, optional: true, required: false
  private _groupFullPath?: string; 
  public get groupFullPath() {
    return this.getStringAttribute('group_full_path');
  }
  public set groupFullPath(value: string) {
    this._groupFullPath = value;
  }
  public resetGroupFullPath() {
    this._groupFullPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupFullPathInput() {
    return this._groupFullPath;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // project_full_path - computed: false, optional: true, required: false
  private _projectFullPath?: string; 
  public get projectFullPath() {
    return this.getStringAttribute('project_full_path');
  }
  public set projectFullPath(value: string) {
    this._projectFullPath = value;
  }
  public resetProjectFullPath() {
    this._projectFullPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectFullPathInput() {
    return this._projectFullPath;
  }

  // stages - computed: false, optional: false, required: true
  private _stages = new ValueStreamAnalyticsStagesList(this, "stages", false);
  public get stages() {
    return this._stages;
  }
  public putStages(value: ValueStreamAnalyticsStages[] | cdktf.IResolvable) {
    this._stages.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stagesInput() {
    return this._stages.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_full_path: cdktf.stringToTerraform(this._groupFullPath),
      name: cdktf.stringToTerraform(this._name),
      project_full_path: cdktf.stringToTerraform(this._projectFullPath),
      stages: cdktf.listMapper(valueStreamAnalyticsStagesToTerraform, false)(this._stages.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_full_path: {
        value: cdktf.stringToHclTerraform(this._groupFullPath),
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
      project_full_path: {
        value: cdktf.stringToHclTerraform(this._projectFullPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stages: {
        value: cdktf.listMapperHcl(valueStreamAnalyticsStagesToHclTerraform, false)(this._stages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ValueStreamAnalyticsStagesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
