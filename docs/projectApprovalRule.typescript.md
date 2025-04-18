# `projectApprovalRule` Submodule <a name="`projectApprovalRule` Submodule" id="@cdktf/provider-gitlab.projectApprovalRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectApprovalRule <a name="ProjectApprovalRule" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/project_approval_rule gitlab_project_approval_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer"></a>

```typescript
import { projectApprovalRule } from '@cdktf/provider-gitlab'

new projectApprovalRule.ProjectApprovalRule(scope: Construct, id: string, config: ProjectApprovalRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig">ProjectApprovalRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig">ProjectApprovalRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetAppliesToAllProtectedBranches">resetAppliesToAllProtectedBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetDisableImportingDefaultAnyApproverRuleOnCreate">resetDisableImportingDefaultAnyApproverRuleOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetGroupIds">resetGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetProtectedBranchIds">resetProtectedBranchIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetReportType">resetReportType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetRuleType">resetRuleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetUserIds">resetUserIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAppliesToAllProtectedBranches` <a name="resetAppliesToAllProtectedBranches" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetAppliesToAllProtectedBranches"></a>

```typescript
public resetAppliesToAllProtectedBranches(): void
```

##### `resetDisableImportingDefaultAnyApproverRuleOnCreate` <a name="resetDisableImportingDefaultAnyApproverRuleOnCreate" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetDisableImportingDefaultAnyApproverRuleOnCreate"></a>

```typescript
public resetDisableImportingDefaultAnyApproverRuleOnCreate(): void
```

##### `resetGroupIds` <a name="resetGroupIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetGroupIds"></a>

```typescript
public resetGroupIds(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProtectedBranchIds` <a name="resetProtectedBranchIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetProtectedBranchIds"></a>

```typescript
public resetProtectedBranchIds(): void
```

##### `resetReportType` <a name="resetReportType" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetReportType"></a>

```typescript
public resetReportType(): void
```

##### `resetRuleType` <a name="resetRuleType" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetRuleType"></a>

```typescript
public resetRuleType(): void
```

##### `resetUserIds` <a name="resetUserIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetUserIds"></a>

```typescript
public resetUserIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectApprovalRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isConstruct"></a>

```typescript
import { projectApprovalRule } from '@cdktf/provider-gitlab'

projectApprovalRule.ProjectApprovalRule.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isTerraformElement"></a>

```typescript
import { projectApprovalRule } from '@cdktf/provider-gitlab'

projectApprovalRule.ProjectApprovalRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isTerraformResource"></a>

```typescript
import { projectApprovalRule } from '@cdktf/provider-gitlab'

projectApprovalRule.ProjectApprovalRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.generateConfigForImport"></a>

```typescript
import { projectApprovalRule } from '@cdktf/provider-gitlab'

projectApprovalRule.ProjectApprovalRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ProjectApprovalRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectApprovalRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectApprovalRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/project_approval_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectApprovalRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.appliesToAllProtectedBranchesInput">appliesToAllProtectedBranchesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.approvalsRequiredInput">approvalsRequiredInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.disableImportingDefaultAnyApproverRuleOnCreateInput">disableImportingDefaultAnyApproverRuleOnCreateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.groupIdsInput">groupIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.protectedBranchIdsInput">protectedBranchIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.reportTypeInput">reportTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.ruleTypeInput">ruleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.userIdsInput">userIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.appliesToAllProtectedBranches">appliesToAllProtectedBranches</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.approvalsRequired">approvalsRequired</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.disableImportingDefaultAnyApproverRuleOnCreate">disableImportingDefaultAnyApproverRuleOnCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.groupIds">groupIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.protectedBranchIds">protectedBranchIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.reportType">reportType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.ruleType">ruleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.userIds">userIds</a></code> | <code>number[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appliesToAllProtectedBranchesInput`<sup>Optional</sup> <a name="appliesToAllProtectedBranchesInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.appliesToAllProtectedBranchesInput"></a>

```typescript
public readonly appliesToAllProtectedBranchesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `approvalsRequiredInput`<sup>Optional</sup> <a name="approvalsRequiredInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.approvalsRequiredInput"></a>

```typescript
public readonly approvalsRequiredInput: number;
```

- *Type:* number

---

##### `disableImportingDefaultAnyApproverRuleOnCreateInput`<sup>Optional</sup> <a name="disableImportingDefaultAnyApproverRuleOnCreateInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.disableImportingDefaultAnyApproverRuleOnCreateInput"></a>

```typescript
public readonly disableImportingDefaultAnyApproverRuleOnCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupIdsInput`<sup>Optional</sup> <a name="groupIdsInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.groupIdsInput"></a>

```typescript
public readonly groupIdsInput: number[];
```

- *Type:* number[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `protectedBranchIdsInput`<sup>Optional</sup> <a name="protectedBranchIdsInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.protectedBranchIdsInput"></a>

```typescript
public readonly protectedBranchIdsInput: number[];
```

- *Type:* number[]

---

##### `reportTypeInput`<sup>Optional</sup> <a name="reportTypeInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.reportTypeInput"></a>

```typescript
public readonly reportTypeInput: string;
```

- *Type:* string

---

##### `ruleTypeInput`<sup>Optional</sup> <a name="ruleTypeInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.ruleTypeInput"></a>

```typescript
public readonly ruleTypeInput: string;
```

- *Type:* string

---

##### `userIdsInput`<sup>Optional</sup> <a name="userIdsInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.userIdsInput"></a>

```typescript
public readonly userIdsInput: number[];
```

- *Type:* number[]

---

##### `appliesToAllProtectedBranches`<sup>Required</sup> <a name="appliesToAllProtectedBranches" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.appliesToAllProtectedBranches"></a>

```typescript
public readonly appliesToAllProtectedBranches: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `approvalsRequired`<sup>Required</sup> <a name="approvalsRequired" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.approvalsRequired"></a>

```typescript
public readonly approvalsRequired: number;
```

- *Type:* number

---

##### `disableImportingDefaultAnyApproverRuleOnCreate`<sup>Required</sup> <a name="disableImportingDefaultAnyApproverRuleOnCreate" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.disableImportingDefaultAnyApproverRuleOnCreate"></a>

```typescript
public readonly disableImportingDefaultAnyApproverRuleOnCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupIds`<sup>Required</sup> <a name="groupIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.groupIds"></a>

```typescript
public readonly groupIds: number[];
```

- *Type:* number[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `protectedBranchIds`<sup>Required</sup> <a name="protectedBranchIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.protectedBranchIds"></a>

```typescript
public readonly protectedBranchIds: number[];
```

- *Type:* number[]

---

##### `reportType`<sup>Required</sup> <a name="reportType" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.reportType"></a>

```typescript
public readonly reportType: string;
```

- *Type:* string

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.ruleType"></a>

```typescript
public readonly ruleType: string;
```

- *Type:* string

---

##### `userIds`<sup>Required</sup> <a name="userIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.userIds"></a>

```typescript
public readonly userIds: number[];
```

- *Type:* number[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectApprovalRuleConfig <a name="ProjectApprovalRuleConfig" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.Initializer"></a>

```typescript
import { projectApprovalRule } from '@cdktf/provider-gitlab'

const projectApprovalRuleConfig: projectApprovalRule.ProjectApprovalRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.approvalsRequired">approvalsRequired</a></code> | <code>number</code> | The number of approvals required for this rule. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.name">name</a></code> | <code>string</code> | The name of the approval rule. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.project">project</a></code> | <code>string</code> | The name or id of the project to add the approval rules. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.appliesToAllProtectedBranches">appliesToAllProtectedBranches</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the rule is applied to all protected branches. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.disableImportingDefaultAnyApproverRuleOnCreate">disableImportingDefaultAnyApproverRuleOnCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | When this flag is set, the default `any_approver` rule will not be imported if present. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.groupIds">groupIds</a></code> | <code>number[]</code> | A list of group IDs whose members can approve of the merge request. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/project_approval_rule#id ProjectApprovalRule#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.protectedBranchIds">protectedBranchIds</a></code> | <code>number[]</code> | A list of protected branch IDs (not branch names) for which the rule applies. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.reportType">reportType</a></code> | <code>string</code> | Report type is required when the rule_type is `report_approver`. Valid values are `code_coverage`. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.ruleType">ruleType</a></code> | <code>string</code> | String, defaults to 'regular'. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.userIds">userIds</a></code> | <code>number[]</code> | A list of specific User IDs to add to the list of approvers. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `approvalsRequired`<sup>Required</sup> <a name="approvalsRequired" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.approvalsRequired"></a>

```typescript
public readonly approvalsRequired: number;
```

- *Type:* number

The number of approvals required for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/project_approval_rule#approvals_required ProjectApprovalRule#approvals_required}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the approval rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/project_approval_rule#name ProjectApprovalRule#name}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The name or id of the project to add the approval rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/project_approval_rule#project ProjectApprovalRule#project}

---

##### `appliesToAllProtectedBranches`<sup>Optional</sup> <a name="appliesToAllProtectedBranches" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.appliesToAllProtectedBranches"></a>

```typescript
public readonly appliesToAllProtectedBranches: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the rule is applied to all protected branches.

If set to 'true', the value of `protected_branch_ids` is ignored. Default is 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/project_approval_rule#applies_to_all_protected_branches ProjectApprovalRule#applies_to_all_protected_branches}

---

##### `disableImportingDefaultAnyApproverRuleOnCreate`<sup>Optional</sup> <a name="disableImportingDefaultAnyApproverRuleOnCreate" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.disableImportingDefaultAnyApproverRuleOnCreate"></a>

```typescript
public readonly disableImportingDefaultAnyApproverRuleOnCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When this flag is set, the default `any_approver` rule will not be imported if present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/project_approval_rule#disable_importing_default_any_approver_rule_on_create ProjectApprovalRule#disable_importing_default_any_approver_rule_on_create}

---

##### `groupIds`<sup>Optional</sup> <a name="groupIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.groupIds"></a>

```typescript
public readonly groupIds: number[];
```

- *Type:* number[]

A list of group IDs whose members can approve of the merge request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/project_approval_rule#group_ids ProjectApprovalRule#group_ids}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/project_approval_rule#id ProjectApprovalRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protectedBranchIds`<sup>Optional</sup> <a name="protectedBranchIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.protectedBranchIds"></a>

```typescript
public readonly protectedBranchIds: number[];
```

- *Type:* number[]

A list of protected branch IDs (not branch names) for which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/project_approval_rule#protected_branch_ids ProjectApprovalRule#protected_branch_ids}

---

##### `reportType`<sup>Optional</sup> <a name="reportType" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.reportType"></a>

```typescript
public readonly reportType: string;
```

- *Type:* string

Report type is required when the rule_type is `report_approver`. Valid values are `code_coverage`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/project_approval_rule#report_type ProjectApprovalRule#report_type}

---

##### `ruleType`<sup>Optional</sup> <a name="ruleType" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.ruleType"></a>

```typescript
public readonly ruleType: string;
```

- *Type:* string

String, defaults to 'regular'.

The type of rule. `any_approver` is a pre-configured default rule with `approvals_required` at `0`. Valid values are `regular`, `any_approver`, `report_approver`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/project_approval_rule#rule_type ProjectApprovalRule#rule_type}

---

##### `userIds`<sup>Optional</sup> <a name="userIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.userIds"></a>

```typescript
public readonly userIds: number[];
```

- *Type:* number[]

A list of specific User IDs to add to the list of approvers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/project_approval_rule#user_ids ProjectApprovalRule#user_ids}

---



