# `projectApprovalRule` Submodule <a name="`projectApprovalRule` Submodule" id="@cdktf/provider-gitlab.projectApprovalRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectApprovalRule <a name="ProjectApprovalRule" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_approval_rule gitlab_project_approval_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/projectapprovalrule"

projectapprovalrule.NewProjectApprovalRule(scope Construct, id *string, config ProjectApprovalRuleConfig) ProjectApprovalRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig">ProjectApprovalRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig">ProjectApprovalRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetAppliesToAllProtectedBranches">ResetAppliesToAllProtectedBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetDisableImportingDefaultAnyApproverRuleOnCreate">ResetDisableImportingDefaultAnyApproverRuleOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetGroupIds">ResetGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetProtectedBranchIds">ResetProtectedBranchIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetReportType">ResetReportType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetRuleType">ResetRuleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetUserIds">ResetUserIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAppliesToAllProtectedBranches` <a name="ResetAppliesToAllProtectedBranches" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetAppliesToAllProtectedBranches"></a>

```go
func ResetAppliesToAllProtectedBranches()
```

##### `ResetDisableImportingDefaultAnyApproverRuleOnCreate` <a name="ResetDisableImportingDefaultAnyApproverRuleOnCreate" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetDisableImportingDefaultAnyApproverRuleOnCreate"></a>

```go
func ResetDisableImportingDefaultAnyApproverRuleOnCreate()
```

##### `ResetGroupIds` <a name="ResetGroupIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetGroupIds"></a>

```go
func ResetGroupIds()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetId"></a>

```go
func ResetId()
```

##### `ResetProtectedBranchIds` <a name="ResetProtectedBranchIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetProtectedBranchIds"></a>

```go
func ResetProtectedBranchIds()
```

##### `ResetReportType` <a name="ResetReportType" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetReportType"></a>

```go
func ResetReportType()
```

##### `ResetRuleType` <a name="ResetRuleType" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetRuleType"></a>

```go
func ResetRuleType()
```

##### `ResetUserIds` <a name="ResetUserIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetUserIds"></a>

```go
func ResetUserIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectApprovalRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/projectapprovalrule"

projectapprovalrule.ProjectApprovalRule_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/projectapprovalrule"

projectapprovalrule.ProjectApprovalRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/projectapprovalrule"

projectapprovalrule.ProjectApprovalRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/projectapprovalrule"

projectapprovalrule.ProjectApprovalRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ProjectApprovalRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ProjectApprovalRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ProjectApprovalRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_approval_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ProjectApprovalRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.appliesToAllProtectedBranchesInput">AppliesToAllProtectedBranchesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.approvalsRequiredInput">ApprovalsRequiredInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.disableImportingDefaultAnyApproverRuleOnCreateInput">DisableImportingDefaultAnyApproverRuleOnCreateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.groupIdsInput">GroupIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.protectedBranchIdsInput">ProtectedBranchIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.reportTypeInput">ReportTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.ruleTypeInput">RuleTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.userIdsInput">UserIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.appliesToAllProtectedBranches">AppliesToAllProtectedBranches</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.approvalsRequired">ApprovalsRequired</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.disableImportingDefaultAnyApproverRuleOnCreate">DisableImportingDefaultAnyApproverRuleOnCreate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.groupIds">GroupIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.protectedBranchIds">ProtectedBranchIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.reportType">ReportType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.ruleType">RuleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.userIds">UserIds</a></code> | <code>*[]*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppliesToAllProtectedBranchesInput`<sup>Optional</sup> <a name="AppliesToAllProtectedBranchesInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.appliesToAllProtectedBranchesInput"></a>

```go
func AppliesToAllProtectedBranchesInput() interface{}
```

- *Type:* interface{}

---

##### `ApprovalsRequiredInput`<sup>Optional</sup> <a name="ApprovalsRequiredInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.approvalsRequiredInput"></a>

```go
func ApprovalsRequiredInput() *f64
```

- *Type:* *f64

---

##### `DisableImportingDefaultAnyApproverRuleOnCreateInput`<sup>Optional</sup> <a name="DisableImportingDefaultAnyApproverRuleOnCreateInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.disableImportingDefaultAnyApproverRuleOnCreateInput"></a>

```go
func DisableImportingDefaultAnyApproverRuleOnCreateInput() interface{}
```

- *Type:* interface{}

---

##### `GroupIdsInput`<sup>Optional</sup> <a name="GroupIdsInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.groupIdsInput"></a>

```go
func GroupIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ProtectedBranchIdsInput`<sup>Optional</sup> <a name="ProtectedBranchIdsInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.protectedBranchIdsInput"></a>

```go
func ProtectedBranchIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `ReportTypeInput`<sup>Optional</sup> <a name="ReportTypeInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.reportTypeInput"></a>

```go
func ReportTypeInput() *string
```

- *Type:* *string

---

##### `RuleTypeInput`<sup>Optional</sup> <a name="RuleTypeInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.ruleTypeInput"></a>

```go
func RuleTypeInput() *string
```

- *Type:* *string

---

##### `UserIdsInput`<sup>Optional</sup> <a name="UserIdsInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.userIdsInput"></a>

```go
func UserIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `AppliesToAllProtectedBranches`<sup>Required</sup> <a name="AppliesToAllProtectedBranches" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.appliesToAllProtectedBranches"></a>

```go
func AppliesToAllProtectedBranches() interface{}
```

- *Type:* interface{}

---

##### `ApprovalsRequired`<sup>Required</sup> <a name="ApprovalsRequired" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.approvalsRequired"></a>

```go
func ApprovalsRequired() *f64
```

- *Type:* *f64

---

##### `DisableImportingDefaultAnyApproverRuleOnCreate`<sup>Required</sup> <a name="DisableImportingDefaultAnyApproverRuleOnCreate" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.disableImportingDefaultAnyApproverRuleOnCreate"></a>

```go
func DisableImportingDefaultAnyApproverRuleOnCreate() interface{}
```

- *Type:* interface{}

---

##### `GroupIds`<sup>Required</sup> <a name="GroupIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.groupIds"></a>

```go
func GroupIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ProtectedBranchIds`<sup>Required</sup> <a name="ProtectedBranchIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.protectedBranchIds"></a>

```go
func ProtectedBranchIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `ReportType`<sup>Required</sup> <a name="ReportType" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.reportType"></a>

```go
func ReportType() *string
```

- *Type:* *string

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.ruleType"></a>

```go
func RuleType() *string
```

- *Type:* *string

---

##### `UserIds`<sup>Required</sup> <a name="UserIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.userIds"></a>

```go
func UserIds() *[]*f64
```

- *Type:* *[]*f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectApprovalRuleConfig <a name="ProjectApprovalRuleConfig" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/projectapprovalrule"

&projectapprovalrule.ProjectApprovalRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApprovalsRequired: *f64,
	Name: *string,
	Project: *string,
	AppliesToAllProtectedBranches: interface{},
	DisableImportingDefaultAnyApproverRuleOnCreate: interface{},
	GroupIds: *[]*f64,
	Id: *string,
	ProtectedBranchIds: *[]*f64,
	ReportType: *string,
	RuleType: *string,
	UserIds: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.approvalsRequired">ApprovalsRequired</a></code> | <code>*f64</code> | The number of approvals required for this rule. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.name">Name</a></code> | <code>*string</code> | The name of the approval rule. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.project">Project</a></code> | <code>*string</code> | The name or id of the project to add the approval rules. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.appliesToAllProtectedBranches">AppliesToAllProtectedBranches</a></code> | <code>interface{}</code> | Whether the rule is applied to all protected branches. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.disableImportingDefaultAnyApproverRuleOnCreate">DisableImportingDefaultAnyApproverRuleOnCreate</a></code> | <code>interface{}</code> | When this flag is set, the default `any_approver` rule will not be imported if present. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.groupIds">GroupIds</a></code> | <code>*[]*f64</code> | A list of group IDs whose members can approve of the merge request. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_approval_rule#id ProjectApprovalRule#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.protectedBranchIds">ProtectedBranchIds</a></code> | <code>*[]*f64</code> | A list of protected branch IDs (not branch names) for which the rule applies. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.reportType">ReportType</a></code> | <code>*string</code> | Report type is required when the rule_type is `report_approver`. Valid values are `code_coverage`. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.ruleType">RuleType</a></code> | <code>*string</code> | String, defaults to 'regular'. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.userIds">UserIds</a></code> | <code>*[]*f64</code> | A list of specific User IDs to add to the list of approvers. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApprovalsRequired`<sup>Required</sup> <a name="ApprovalsRequired" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.approvalsRequired"></a>

```go
ApprovalsRequired *f64
```

- *Type:* *f64

The number of approvals required for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_approval_rule#approvals_required ProjectApprovalRule#approvals_required}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the approval rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_approval_rule#name ProjectApprovalRule#name}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The name or id of the project to add the approval rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_approval_rule#project ProjectApprovalRule#project}

---

##### `AppliesToAllProtectedBranches`<sup>Optional</sup> <a name="AppliesToAllProtectedBranches" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.appliesToAllProtectedBranches"></a>

```go
AppliesToAllProtectedBranches interface{}
```

- *Type:* interface{}

Whether the rule is applied to all protected branches.

If set to 'true', the value of `protected_branch_ids` is ignored. Default is 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_approval_rule#applies_to_all_protected_branches ProjectApprovalRule#applies_to_all_protected_branches}

---

##### `DisableImportingDefaultAnyApproverRuleOnCreate`<sup>Optional</sup> <a name="DisableImportingDefaultAnyApproverRuleOnCreate" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.disableImportingDefaultAnyApproverRuleOnCreate"></a>

```go
DisableImportingDefaultAnyApproverRuleOnCreate interface{}
```

- *Type:* interface{}

When this flag is set, the default `any_approver` rule will not be imported if present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_approval_rule#disable_importing_default_any_approver_rule_on_create ProjectApprovalRule#disable_importing_default_any_approver_rule_on_create}

---

##### `GroupIds`<sup>Optional</sup> <a name="GroupIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.groupIds"></a>

```go
GroupIds *[]*f64
```

- *Type:* *[]*f64

A list of group IDs whose members can approve of the merge request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_approval_rule#group_ids ProjectApprovalRule#group_ids}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_approval_rule#id ProjectApprovalRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProtectedBranchIds`<sup>Optional</sup> <a name="ProtectedBranchIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.protectedBranchIds"></a>

```go
ProtectedBranchIds *[]*f64
```

- *Type:* *[]*f64

A list of protected branch IDs (not branch names) for which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_approval_rule#protected_branch_ids ProjectApprovalRule#protected_branch_ids}

---

##### `ReportType`<sup>Optional</sup> <a name="ReportType" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.reportType"></a>

```go
ReportType *string
```

- *Type:* *string

Report type is required when the rule_type is `report_approver`. Valid values are `code_coverage`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_approval_rule#report_type ProjectApprovalRule#report_type}

---

##### `RuleType`<sup>Optional</sup> <a name="RuleType" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.ruleType"></a>

```go
RuleType *string
```

- *Type:* *string

String, defaults to 'regular'.

The type of rule. `any_approver` is a pre-configured default rule with `approvals_required` at `0`. Valid values are `regular`, `any_approver`, `report_approver`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_approval_rule#rule_type ProjectApprovalRule#rule_type}

---

##### `UserIds`<sup>Optional</sup> <a name="UserIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.userIds"></a>

```go
UserIds *[]*f64
```

- *Type:* *[]*f64

A list of specific User IDs to add to the list of approvers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_approval_rule#user_ids ProjectApprovalRule#user_ids}

---



