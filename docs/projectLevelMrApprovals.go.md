# `gitlab_project_level_mr_approvals`

Refer to the Terraform Registory for docs: [`gitlab_project_level_mr_approvals`](https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals).

# `projectLevelMrApprovals` Submodule <a name="`projectLevelMrApprovals` Submodule" id="@cdktf/provider-gitlab.projectLevelMrApprovals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectLevelMrApprovals <a name="ProjectLevelMrApprovals" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals gitlab_project_level_mr_approvals}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v7/projectlevelmrapprovals"

projectlevelmrapprovals.NewProjectLevelMrApprovals(scope Construct, id *string, config ProjectLevelMrApprovalsConfig) ProjectLevelMrApprovals
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig">ProjectLevelMrApprovalsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig">ProjectLevelMrApprovalsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetDisableOverridingApproversPerMergeRequest">ResetDisableOverridingApproversPerMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetMergeRequestsAuthorApproval">ResetMergeRequestsAuthorApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetMergeRequestsDisableCommittersApproval">ResetMergeRequestsDisableCommittersApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetRequirePasswordToApprove">ResetRequirePasswordToApprove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetResetApprovalsOnPush">ResetResetApprovalsOnPush</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDisableOverridingApproversPerMergeRequest` <a name="ResetDisableOverridingApproversPerMergeRequest" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetDisableOverridingApproversPerMergeRequest"></a>

```go
func ResetDisableOverridingApproversPerMergeRequest()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetId"></a>

```go
func ResetId()
```

##### `ResetMergeRequestsAuthorApproval` <a name="ResetMergeRequestsAuthorApproval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetMergeRequestsAuthorApproval"></a>

```go
func ResetMergeRequestsAuthorApproval()
```

##### `ResetMergeRequestsDisableCommittersApproval` <a name="ResetMergeRequestsDisableCommittersApproval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetMergeRequestsDisableCommittersApproval"></a>

```go
func ResetMergeRequestsDisableCommittersApproval()
```

##### `ResetRequirePasswordToApprove` <a name="ResetRequirePasswordToApprove" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetRequirePasswordToApprove"></a>

```go
func ResetRequirePasswordToApprove()
```

##### `ResetResetApprovalsOnPush` <a name="ResetResetApprovalsOnPush" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetResetApprovalsOnPush"></a>

```go
func ResetResetApprovalsOnPush()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v7/projectlevelmrapprovals"

projectlevelmrapprovals.ProjectLevelMrApprovals_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v7/projectlevelmrapprovals"

projectlevelmrapprovals.ProjectLevelMrApprovals_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v7/projectlevelmrapprovals"

projectlevelmrapprovals.ProjectLevelMrApprovals_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.disableOverridingApproversPerMergeRequestInput">DisableOverridingApproversPerMergeRequestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsAuthorApprovalInput">MergeRequestsAuthorApprovalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsDisableCommittersApprovalInput">MergeRequestsDisableCommittersApprovalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.projectIdInput">ProjectIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.requirePasswordToApproveInput">RequirePasswordToApproveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.resetApprovalsOnPushInput">ResetApprovalsOnPushInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.disableOverridingApproversPerMergeRequest">DisableOverridingApproversPerMergeRequest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsAuthorApproval">MergeRequestsAuthorApproval</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsDisableCommittersApproval">MergeRequestsDisableCommittersApproval</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.projectId">ProjectId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.requirePasswordToApprove">RequirePasswordToApprove</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.resetApprovalsOnPush">ResetApprovalsOnPush</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisableOverridingApproversPerMergeRequestInput`<sup>Optional</sup> <a name="DisableOverridingApproversPerMergeRequestInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.disableOverridingApproversPerMergeRequestInput"></a>

```go
func DisableOverridingApproversPerMergeRequestInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MergeRequestsAuthorApprovalInput`<sup>Optional</sup> <a name="MergeRequestsAuthorApprovalInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsAuthorApprovalInput"></a>

```go
func MergeRequestsAuthorApprovalInput() interface{}
```

- *Type:* interface{}

---

##### `MergeRequestsDisableCommittersApprovalInput`<sup>Optional</sup> <a name="MergeRequestsDisableCommittersApprovalInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsDisableCommittersApprovalInput"></a>

```go
func MergeRequestsDisableCommittersApprovalInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.projectIdInput"></a>

```go
func ProjectIdInput() *f64
```

- *Type:* *f64

---

##### `RequirePasswordToApproveInput`<sup>Optional</sup> <a name="RequirePasswordToApproveInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.requirePasswordToApproveInput"></a>

```go
func RequirePasswordToApproveInput() interface{}
```

- *Type:* interface{}

---

##### `ResetApprovalsOnPushInput`<sup>Optional</sup> <a name="ResetApprovalsOnPushInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.resetApprovalsOnPushInput"></a>

```go
func ResetApprovalsOnPushInput() interface{}
```

- *Type:* interface{}

---

##### `DisableOverridingApproversPerMergeRequest`<sup>Required</sup> <a name="DisableOverridingApproversPerMergeRequest" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.disableOverridingApproversPerMergeRequest"></a>

```go
func DisableOverridingApproversPerMergeRequest() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MergeRequestsAuthorApproval`<sup>Required</sup> <a name="MergeRequestsAuthorApproval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsAuthorApproval"></a>

```go
func MergeRequestsAuthorApproval() interface{}
```

- *Type:* interface{}

---

##### `MergeRequestsDisableCommittersApproval`<sup>Required</sup> <a name="MergeRequestsDisableCommittersApproval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsDisableCommittersApproval"></a>

```go
func MergeRequestsDisableCommittersApproval() interface{}
```

- *Type:* interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.projectId"></a>

```go
func ProjectId() *f64
```

- *Type:* *f64

---

##### `RequirePasswordToApprove`<sup>Required</sup> <a name="RequirePasswordToApprove" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.requirePasswordToApprove"></a>

```go
func RequirePasswordToApprove() interface{}
```

- *Type:* interface{}

---

##### `ResetApprovalsOnPush`<sup>Required</sup> <a name="ResetApprovalsOnPush" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.resetApprovalsOnPush"></a>

```go
func ResetApprovalsOnPush() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectLevelMrApprovalsConfig <a name="ProjectLevelMrApprovalsConfig" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v7/projectlevelmrapprovals"

&projectlevelmrapprovals.ProjectLevelMrApprovalsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProjectId: *f64,
	DisableOverridingApproversPerMergeRequest: interface{},
	Id: *string,
	MergeRequestsAuthorApproval: interface{},
	MergeRequestsDisableCommittersApproval: interface{},
	RequirePasswordToApprove: interface{},
	ResetApprovalsOnPush: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.projectId">ProjectId</a></code> | <code>*f64</code> | The ID of the project to change MR approval configuration. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.disableOverridingApproversPerMergeRequest">DisableOverridingApproversPerMergeRequest</a></code> | <code>interface{}</code> | By default, users are able to edit the approval rules in merge requests. If set to true,. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals#id ProjectLevelMrApprovals#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.mergeRequestsAuthorApproval">MergeRequestsAuthorApproval</a></code> | <code>interface{}</code> | Set to `true` if you want to allow merge request authors to self-approve merge requests. Authors. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.mergeRequestsDisableCommittersApproval">MergeRequestsDisableCommittersApproval</a></code> | <code>interface{}</code> | Set to `true` if you want to prevent approval of merge requests by merge request committers. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.requirePasswordToApprove">RequirePasswordToApprove</a></code> | <code>interface{}</code> | Set to `true` if you want to require authentication when approving a merge request. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.resetApprovalsOnPush">ResetApprovalsOnPush</a></code> | <code>interface{}</code> | Set to `true` if you want to remove all approvals in a merge request when new commits are pushed to its source branch. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.projectId"></a>

```go
ProjectId *f64
```

- *Type:* *f64

The ID of the project to change MR approval configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals#project_id ProjectLevelMrApprovals#project_id}

---

##### `DisableOverridingApproversPerMergeRequest`<sup>Optional</sup> <a name="DisableOverridingApproversPerMergeRequest" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.disableOverridingApproversPerMergeRequest"></a>

```go
DisableOverridingApproversPerMergeRequest interface{}
```

- *Type:* interface{}

By default, users are able to edit the approval rules in merge requests. If set to true,.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals#disable_overriding_approvers_per_merge_request ProjectLevelMrApprovals#disable_overriding_approvers_per_merge_request}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals#id ProjectLevelMrApprovals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MergeRequestsAuthorApproval`<sup>Optional</sup> <a name="MergeRequestsAuthorApproval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.mergeRequestsAuthorApproval"></a>

```go
MergeRequestsAuthorApproval interface{}
```

- *Type:* interface{}

Set to `true` if you want to allow merge request authors to self-approve merge requests. Authors.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals#merge_requests_author_approval ProjectLevelMrApprovals#merge_requests_author_approval}

---

##### `MergeRequestsDisableCommittersApproval`<sup>Optional</sup> <a name="MergeRequestsDisableCommittersApproval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.mergeRequestsDisableCommittersApproval"></a>

```go
MergeRequestsDisableCommittersApproval interface{}
```

- *Type:* interface{}

Set to `true` if you want to prevent approval of merge requests by merge request committers.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals#merge_requests_disable_committers_approval ProjectLevelMrApprovals#merge_requests_disable_committers_approval}

---

##### `RequirePasswordToApprove`<sup>Optional</sup> <a name="RequirePasswordToApprove" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.requirePasswordToApprove"></a>

```go
RequirePasswordToApprove interface{}
```

- *Type:* interface{}

Set to `true` if you want to require authentication when approving a merge request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals#require_password_to_approve ProjectLevelMrApprovals#require_password_to_approve}

---

##### `ResetApprovalsOnPush`<sup>Optional</sup> <a name="ResetApprovalsOnPush" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.resetApprovalsOnPush"></a>

```go
ResetApprovalsOnPush interface{}
```

- *Type:* interface{}

Set to `true` if you want to remove all approvals in a merge request when new commits are pushed to its source branch.

Default is `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals#reset_approvals_on_push ProjectLevelMrApprovals#reset_approvals_on_push}

---



