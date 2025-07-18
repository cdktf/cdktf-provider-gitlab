# `projectContainerRepositoryProtection` Submodule <a name="`projectContainerRepositoryProtection` Submodule" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectContainerRepositoryProtection <a name="ProjectContainerRepositoryProtection" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_container_repository_protection gitlab_project_container_repository_protection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer"></a>

```typescript
import { projectContainerRepositoryProtection } from '@cdktf/provider-gitlab'

new projectContainerRepositoryProtection.ProjectContainerRepositoryProtection(scope: Construct, id: string, config: ProjectContainerRepositoryProtectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig">ProjectContainerRepositoryProtectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig">ProjectContainerRepositoryProtectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.resetMinimumAccessLevelForDelete">resetMinimumAccessLevelForDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.resetMinimumAccessLevelForPush">resetMinimumAccessLevelForPush</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetMinimumAccessLevelForDelete` <a name="resetMinimumAccessLevelForDelete" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.resetMinimumAccessLevelForDelete"></a>

```typescript
public resetMinimumAccessLevelForDelete(): void
```

##### `resetMinimumAccessLevelForPush` <a name="resetMinimumAccessLevelForPush" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.resetMinimumAccessLevelForPush"></a>

```typescript
public resetMinimumAccessLevelForPush(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectContainerRepositoryProtection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isConstruct"></a>

```typescript
import { projectContainerRepositoryProtection } from '@cdktf/provider-gitlab'

projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isTerraformElement"></a>

```typescript
import { projectContainerRepositoryProtection } from '@cdktf/provider-gitlab'

projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isTerraformResource"></a>

```typescript
import { projectContainerRepositoryProtection } from '@cdktf/provider-gitlab'

projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.generateConfigForImport"></a>

```typescript
import { projectContainerRepositoryProtection } from '@cdktf/provider-gitlab'

projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ProjectContainerRepositoryProtection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectContainerRepositoryProtection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectContainerRepositoryProtection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_container_repository_protection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectContainerRepositoryProtection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.protectionRuleId">protectionRuleId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForDeleteInput">minimumAccessLevelForDeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForPushInput">minimumAccessLevelForPushInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.repositoryPathPatternInput">repositoryPathPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForDelete">minimumAccessLevelForDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForPush">minimumAccessLevelForPush</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.repositoryPathPattern">repositoryPathPattern</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `protectionRuleId`<sup>Required</sup> <a name="protectionRuleId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.protectionRuleId"></a>

```typescript
public readonly protectionRuleId: number;
```

- *Type:* number

---

##### `minimumAccessLevelForDeleteInput`<sup>Optional</sup> <a name="minimumAccessLevelForDeleteInput" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForDeleteInput"></a>

```typescript
public readonly minimumAccessLevelForDeleteInput: string;
```

- *Type:* string

---

##### `minimumAccessLevelForPushInput`<sup>Optional</sup> <a name="minimumAccessLevelForPushInput" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForPushInput"></a>

```typescript
public readonly minimumAccessLevelForPushInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `repositoryPathPatternInput`<sup>Optional</sup> <a name="repositoryPathPatternInput" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.repositoryPathPatternInput"></a>

```typescript
public readonly repositoryPathPatternInput: string;
```

- *Type:* string

---

##### `minimumAccessLevelForDelete`<sup>Required</sup> <a name="minimumAccessLevelForDelete" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForDelete"></a>

```typescript
public readonly minimumAccessLevelForDelete: string;
```

- *Type:* string

---

##### `minimumAccessLevelForPush`<sup>Required</sup> <a name="minimumAccessLevelForPush" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForPush"></a>

```typescript
public readonly minimumAccessLevelForPush: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `repositoryPathPattern`<sup>Required</sup> <a name="repositoryPathPattern" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.repositoryPathPattern"></a>

```typescript
public readonly repositoryPathPattern: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectContainerRepositoryProtectionConfig <a name="ProjectContainerRepositoryProtectionConfig" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.Initializer"></a>

```typescript
import { projectContainerRepositoryProtection } from '@cdktf/provider-gitlab'

const projectContainerRepositoryProtectionConfig: projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.project">project</a></code> | <code>string</code> | ID or URL-encoded path of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.repositoryPathPattern">repositoryPathPattern</a></code> | <code>string</code> | Container repository path pattern protected by the protection rule. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.minimumAccessLevelForDelete">minimumAccessLevelForDelete</a></code> | <code>string</code> | Minimum GitLab access level required to delete container images in the container registry. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.minimumAccessLevelForPush">minimumAccessLevelForPush</a></code> | <code>string</code> | Minimum GitLab access level required to push container images to the container registry. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

ID or URL-encoded path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_container_repository_protection#project ProjectContainerRepositoryProtection#project}

---

##### `repositoryPathPattern`<sup>Required</sup> <a name="repositoryPathPattern" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.repositoryPathPattern"></a>

```typescript
public readonly repositoryPathPattern: string;
```

- *Type:* string

Container repository path pattern protected by the protection rule.

Wildcard character * allowed. Repository path pattern should start with the project's full path

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_container_repository_protection#repository_path_pattern ProjectContainerRepositoryProtection#repository_path_pattern}

---

##### `minimumAccessLevelForDelete`<sup>Optional</sup> <a name="minimumAccessLevelForDelete" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.minimumAccessLevelForDelete"></a>

```typescript
public readonly minimumAccessLevelForDelete: string;
```

- *Type:* string

Minimum GitLab access level required to delete container images in the container registry.

For example maintainer, owner, admin. Must be provided when `minimum_access_level_for_push` is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_container_repository_protection#minimum_access_level_for_delete ProjectContainerRepositoryProtection#minimum_access_level_for_delete}

---

##### `minimumAccessLevelForPush`<sup>Optional</sup> <a name="minimumAccessLevelForPush" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.minimumAccessLevelForPush"></a>

```typescript
public readonly minimumAccessLevelForPush: string;
```

- *Type:* string

Minimum GitLab access level required to push container images to the container registry.

For example maintainer, owner or admin. Must be provided when `minimum_access_level_for_delete` is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_container_repository_protection#minimum_access_level_for_push ProjectContainerRepositoryProtection#minimum_access_level_for_push}

---



