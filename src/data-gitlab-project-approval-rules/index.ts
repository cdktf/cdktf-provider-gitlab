/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_approval_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabProjectApprovalRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID or path with namespace that identifies the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_approval_rules#project DataGitlabProjectApprovalRules#project}
  */
  readonly project: string;
  /**
  * approval_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_approval_rules#approval_rules DataGitlabProjectApprovalRules#approval_rules}
  */
  readonly approvalRules?: DataGitlabProjectApprovalRulesApprovalRules[] | cdktf.IResolvable;
}
export interface DataGitlabProjectApprovalRulesApprovalRules {
}

export function dataGitlabProjectApprovalRulesApprovalRulesToTerraform(struct?: DataGitlabProjectApprovalRulesApprovalRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabProjectApprovalRulesApprovalRulesToHclTerraform(struct?: DataGitlabProjectApprovalRulesApprovalRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabProjectApprovalRulesApprovalRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabProjectApprovalRulesApprovalRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectApprovalRulesApprovalRules | cdktf.IResolvable | undefined) {
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

  // applies_to_all_protected_branches - computed: true, optional: false, required: false
  public get appliesToAllProtectedBranches() {
    return this.getBooleanAttribute('applies_to_all_protected_branches');
  }

  // approvals_required - computed: true, optional: false, required: false
  public get approvalsRequired() {
    return this.getNumberAttribute('approvals_required');
  }

  // eligible_approver_ids - computed: true, optional: false, required: false
  public get eligibleApproverIds() {
    return this.getNumberListAttribute('eligible_approver_ids');
  }

  // group_ids - computed: true, optional: false, required: false
  public get groupIds() {
    return this.getNumberListAttribute('group_ids');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protected_branch_ids - computed: true, optional: false, required: false
  public get protectedBranchIds() {
    return this.getNumberListAttribute('protected_branch_ids');
  }

  // report_type - computed: true, optional: false, required: false
  public get reportType() {
    return this.getStringAttribute('report_type');
  }

  // rule_type - computed: true, optional: false, required: false
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }

  // user_ids - computed: true, optional: false, required: false
  public get userIds() {
    return this.getNumberListAttribute('user_ids');
  }
}

export class DataGitlabProjectApprovalRulesApprovalRulesList extends cdktf.ComplexList {
  public internalValue? : DataGitlabProjectApprovalRulesApprovalRules[] | cdktf.IResolvable

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
  public get(index: number): DataGitlabProjectApprovalRulesApprovalRulesOutputReference {
    return new DataGitlabProjectApprovalRulesApprovalRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_approval_rules gitlab_project_approval_rules}
*/
export class DataGitlabProjectApprovalRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_approval_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabProjectApprovalRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabProjectApprovalRules to import
  * @param importFromId The id of the existing DataGitlabProjectApprovalRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_approval_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabProjectApprovalRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_approval_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_approval_rules gitlab_project_approval_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabProjectApprovalRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabProjectApprovalRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_approval_rules',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.6.1',
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
    this._approvalRules.internalValue = config.approvalRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // approval_rules - computed: false, optional: true, required: false
  private _approvalRules = new DataGitlabProjectApprovalRulesApprovalRulesList(this, "approval_rules", false);
  public get approvalRules() {
    return this._approvalRules;
  }
  public putApprovalRules(value: DataGitlabProjectApprovalRulesApprovalRules[] | cdktf.IResolvable) {
    this._approvalRules.internalValue = value;
  }
  public resetApprovalRules() {
    this._approvalRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalRulesInput() {
    return this._approvalRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project: cdktf.stringToTerraform(this._project),
      approval_rules: cdktf.listMapper(dataGitlabProjectApprovalRulesApprovalRulesToTerraform, true)(this._approvalRules.internalValue),
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
      approval_rules: {
        value: cdktf.listMapperHcl(dataGitlabProjectApprovalRulesApprovalRulesToHclTerraform, true)(this._approvalRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataGitlabProjectApprovalRulesApprovalRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
